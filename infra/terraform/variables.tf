variable "aws_region" {
  description = "AWS region for the website bucket and deployment parameters."
  type        = string
  default     = "eu-west-2"
}

variable "project" {
  description = "Project name used in resource names and tags."
  type        = string
  default     = "starixis-web"
}

variable "environment" {
  description = "Deployment environment."
  type        = string
  default     = "production"
}

variable "owner" {
  description = "Owner tag applied to AWS resources."
  type        = string
  default     = "starixis"
}

variable "bucket_name" {
  description = "Optional S3 bucket name override. The default includes account and region."
  type        = string
  default     = ""
}

variable "domain_name" {
  description = "Primary website domain used by the ACM certificate."
  type        = string
  default     = "starixis.com"
}

variable "domain_aliases" {
  description = "Custom domains attached to CloudFront after certificate validation."
  type        = list(string)
  default     = ["starixis.com", "www.starixis.com"]
}

variable "create_certificate" {
  description = "Create an ACM certificate in us-east-1 and output its DNS validation records."
  type        = bool
  default     = true
}

variable "certificate_arn" {
  description = "Optional existing us-east-1 ACM certificate ARN."
  type        = string
  default     = ""
}

variable "enable_custom_domain" {
  description = "Attach domain_aliases to CloudFront. Enable only after the ACM certificate is issued."
  type        = bool
  default     = false
}

variable "cloudfront_price_class" {
  description = "CloudFront edge-location price class."
  type        = string
  default     = "PriceClass_100"

  validation {
    condition     = contains(["PriceClass_100", "PriceClass_200", "PriceClass_All"], var.cloudfront_price_class)
    error_message = "cloudfront_price_class must be PriceClass_100, PriceClass_200, or PriceClass_All."
  }
}

variable "jenkins_role_name" {
  description = "Existing Jenkins EC2 IAM role that receives deployment permissions."
  type        = string
  default     = "hubble-jenkins-instance"
}

variable "enable_jenkins_deployment" {
  description = "Attach narrowly scoped website deployment permissions to the Jenkins role."
  type        = bool
  default     = true
}

variable "tags" {
  description = "Additional AWS resource tags."
  type        = map(string)
  default     = {}
}
