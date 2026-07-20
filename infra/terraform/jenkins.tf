data "aws_iam_role" "jenkins" {
  count = var.enable_jenkins_deployment ? 1 : 0
  name  = var.jenkins_role_name
}

data "aws_iam_policy_document" "jenkins_deploy" {
  count = var.enable_jenkins_deployment ? 1 : 0

  statement {
    sid = "ListWebsiteBucket"
    actions = [
      "s3:GetBucketLocation",
      "s3:ListBucket",
    ]
    resources = [aws_s3_bucket.website.arn]
  }

  statement {
    sid = "DeployWebsiteObjects"
    actions = [
      "s3:DeleteObject",
      "s3:GetObject",
      "s3:PutObject",
    ]
    resources = ["${aws_s3_bucket.website.arn}/*"]
  }

  statement {
    sid       = "InvalidateWebsiteDistribution"
    actions   = ["cloudfront:CreateInvalidation", "cloudfront:GetDistribution"]
    resources = [aws_cloudfront_distribution.website.arn]
  }

  statement {
    sid     = "ReadWebsiteDeploymentTargets"
    actions = ["ssm:GetParameter"]
    resources = [
      aws_ssm_parameter.bucket_name.arn,
      aws_ssm_parameter.distribution_id.arn,
    ]
  }
}

resource "aws_iam_role_policy" "jenkins_deploy" {
  count = var.enable_jenkins_deployment ? 1 : 0

  name   = "${local.name_prefix}-deploy"
  role   = data.aws_iam_role.jenkins[0].id
  policy = data.aws_iam_policy_document.jenkins_deploy[0].json
}
