output "website_bucket_name" {
  description = "Private S3 website bucket used by Jenkins."
  value       = aws_s3_bucket.website.id
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID invalidated by Jenkins."
  value       = aws_cloudfront_distribution.website.id
}

output "cloudfront_domain_name" {
  description = "CloudFront URL available immediately after the first apply."
  value       = aws_cloudfront_distribution.website.domain_name
}

output "certificate_arn" {
  description = "ACM certificate ARN created or supplied for the custom domain."
  value       = local.certificate_arn
}

output "certificate_dns_validation_records" {
  description = "CNAME records to add in Squarespace DNS before enabling the custom domain."
  value = var.create_certificate ? {
    for option in aws_acm_certificate.website[0].domain_validation_options : option.domain_name => {
      name  = option.resource_record_name
      type  = option.resource_record_type
      value = option.resource_record_value
    }
  } : {}
}

output "custom_domain_enabled" {
  description = "Whether CloudFront is configured with starixis.com aliases."
  value       = var.enable_custom_domain
}
