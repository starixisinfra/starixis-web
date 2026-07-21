data "aws_caller_identity" "current" {}

data "aws_cloudfront_cache_policy" "caching_optimized" {
  name = "Managed-CachingOptimized"
}

locals {
  name_prefix = "${var.project}-${var.environment}"
  bucket_name = var.bucket_name != "" ? var.bucket_name : "${local.name_prefix}-${data.aws_caller_identity.current.account_id}-${var.aws_region}"

  certificate_arn = var.certificate_arn != "" ? var.certificate_arn : try(aws_acm_certificate.website[0].arn, "")

  common_tags = merge(
    {
      Project     = var.project
      Environment = var.environment
      ManagedBy   = "terraform"
      Owner       = var.owner
    },
    var.tags
  )
}

resource "aws_s3_bucket" "website" {
  bucket        = local.bucket_name
  force_destroy = false

  tags = local.common_tags
}

resource "aws_s3_bucket_public_access_block" "website" {
  bucket = aws_s3_bucket.website.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_ownership_controls" "website" {
  bucket = aws_s3_bucket.website.id

  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "website" {
  bucket = aws_s3_bucket.website.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_versioning" "website" {
  bucket = aws_s3_bucket.website.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_cloudfront_origin_access_control" "website" {
  name                              = local.name_prefix
  description                       = "Private S3 access for ${local.name_prefix}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_function" "uri_rewrite" {
  name    = "${local.name_prefix}-uri-rewrite"
  runtime = "cloudfront-js-2.0"
  comment = "Redirect the apex domain and resolve extensionless Next.js routes"
  publish = true
  code    = <<-JAVASCRIPT
    function queryString(query) {
      var pairs = [];

      Object.keys(query).forEach(function (key) {
        var entry = query[key];
        var values = entry.multiValue || [entry];

        values.forEach(function (item) {
          pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(item.value));
        });
      });

      return pairs.length ? '?' + pairs.join('&') : '';
    }

    function handler(event) {
      var request = event.request;
      var uri = request.uri;

      if (request.headers.host && request.headers.host.value === 'starixis.com') {
        return {
          statusCode: 301,
          statusDescription: 'Moved Permanently',
          headers: {
            location: {
              value: 'https://www.starixis.com' + uri + queryString(request.querystring)
            }
          }
        };
      }

      if (uri.endsWith('/')) {
        request.uri = uri + 'index.html';
      } else if (!uri.split('/').pop().includes('.')) {
        request.uri = uri + '/index.html';
      }

      return request;
    }
  JAVASCRIPT
}

resource "aws_cloudfront_response_headers_policy" "security" {
  name = "${local.name_prefix}-security"

  security_headers_config {
    content_type_options {
      override = true
    }

    frame_options {
      frame_option = "SAMEORIGIN"
      override     = true
    }

    referrer_policy {
      referrer_policy = "strict-origin-when-cross-origin"
      override        = true
    }

    strict_transport_security {
      access_control_max_age_sec = 31536000
      include_subdomains         = false
      preload                    = false
      override                   = true
    }
  }
}

resource "aws_acm_certificate" "website" {
  count    = var.create_certificate ? 1 : 0
  provider = aws.us_east_1

  domain_name               = var.domain_name
  subject_alternative_names = [for alias in var.domain_aliases : alias if alias != var.domain_name]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = local.common_tags
}

resource "aws_cloudfront_distribution" "website" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = local.name_prefix
  default_root_object = "index.html"
  price_class         = var.cloudfront_price_class
  aliases             = var.enable_custom_domain ? var.domain_aliases : []

  origin {
    domain_name              = aws_s3_bucket.website.bucket_regional_domain_name
    origin_id                = "s3-${aws_s3_bucket.website.id}"
    origin_access_control_id = aws_cloudfront_origin_access_control.website.id
  }

  default_cache_behavior {
    target_origin_id       = "s3-${aws_s3_bucket.website.id}"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    compress               = true

    cache_policy_id            = data.aws_cloudfront_cache_policy.caching_optimized.id
    response_headers_policy_id = aws_cloudfront_response_headers_policy.security.id

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.uri_rewrite.arn
    }
  }

  custom_error_response {
    error_code            = 403
    response_code         = 404
    response_page_path    = "/404.html"
    error_caching_min_ttl = 60
  }

  custom_error_response {
    error_code            = 404
    response_code         = 404
    response_page_path    = "/404.html"
    error_caching_min_ttl = 60
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = !var.enable_custom_domain
    acm_certificate_arn            = var.enable_custom_domain ? local.certificate_arn : null
    ssl_support_method             = var.enable_custom_domain ? "sni-only" : null
    minimum_protocol_version       = var.enable_custom_domain ? "TLSv1.2_2021" : null
  }

  lifecycle {
    precondition {
      condition     = !var.enable_custom_domain || local.certificate_arn != ""
      error_message = "Enable the custom domain only after supplying or creating an ACM certificate."
    }
  }

  tags = local.common_tags
}

data "aws_iam_policy_document" "bucket" {
  statement {
    sid     = "AllowCloudFrontReadOnly"
    actions = ["s3:GetObject"]
    resources = [
      "${aws_s3_bucket.website.arn}/*",
    ]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.website.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "website" {
  bucket = aws_s3_bucket.website.id
  policy = data.aws_iam_policy_document.bucket.json
}

resource "aws_ssm_parameter" "bucket_name" {
  name        = "/starixis/web/${var.environment}/bucket-name"
  description = "S3 deployment bucket for the Starixis website"
  type        = "String"
  value       = aws_s3_bucket.website.id

  tags = local.common_tags
}

resource "aws_ssm_parameter" "distribution_id" {
  name        = "/starixis/web/${var.environment}/cloudfront-distribution-id"
  description = "CloudFront distribution deployed by the Starixis website pipeline"
  type        = "String"
  value       = aws_cloudfront_distribution.website.id

  tags = local.common_tags
}
