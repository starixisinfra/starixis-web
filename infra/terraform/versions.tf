terraform {
  required_version = ">= 1.5"

  cloud {
    organization = "starixis"

    workspaces {
      name = "starixis-web-production"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.60"
    }
  }
}

variable "tfc_aws_dynamic_credentials" {
  description = "AWS dynamic credential files injected by HCP Terraform."
  type = object({
    default = object({
      shared_config_file = string
    })
    aliases = map(object({
      shared_config_file = string
    }))
  })
  default = null
}

provider "aws" {
  region              = var.aws_region
  shared_config_files = var.tfc_aws_dynamic_credentials == null ? [] : [var.tfc_aws_dynamic_credentials.default.shared_config_file]
}

provider "aws" {
  alias               = "us_east_1"
  region              = "us-east-1"
  shared_config_files = var.tfc_aws_dynamic_credentials == null ? [] : [var.tfc_aws_dynamic_credentials.aliases["us_east_1"].shared_config_file]
}
