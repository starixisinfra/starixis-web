pipeline {
  agent any

  options {
    timestamps()
    disableConcurrentBuilds()
    buildDiscarder(logRotator(numToKeepStr: '20'))
  }

  environment {
    AWS_REGION = 'eu-west-2'
    NODE_VERSION = '20.20.0'
    PATH = "${WORKSPACE}/.jenkins-node/bin:${env.PATH}"
    BUCKET_PARAMETER = '/starixis/web/production/bucket-name'
    DISTRIBUTION_PARAMETER = '/starixis/web/production/cloudfront-distribution-id'
  }

  stages {
    stage('Bootstrap Node') {
      steps {
        sh '''
          set -eu

          if [ ! -x ".jenkins-node/bin/node" ]; then
            arch="$(uname -m)"
            case "$arch" in
              x86_64) node_arch="x64" ;;
              aarch64|arm64) node_arch="arm64" ;;
              *) echo "Unsupported architecture: $arch" >&2; exit 1 ;;
            esac

            node_dist="node-v${NODE_VERSION}-linux-${node_arch}"
            curl -fsSL "https://nodejs.org/dist/v${NODE_VERSION}/${node_dist}.tar.gz" -o node.tar.gz
            rm -rf .jenkins-node "${node_dist}"
            tar -xzf node.tar.gz
            mv "${node_dist}" .jenkins-node
            rm node.tar.gz
          fi
        '''
      }
    }

    stage('Environment') {
      steps {
        sh 'node --version'
        sh 'npm --version'
        sh 'aws --version'
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Build static site') {
      steps {
        sh 'npm run build'
        sh 'test -f out/index.html && test -f out/404.html'
      }
    }

    stage('Deploy production') {
      when {
        branch 'main'
      }
      steps {
        input message: 'Deploy main to the Starixis production website?', ok: 'Deploy'

        script {
          env.DEPLOY_BUCKET = sh(
            script: 'aws ssm get-parameter --region "$AWS_REGION" --name "$BUCKET_PARAMETER" --query Parameter.Value --output text',
            returnStdout: true
          ).trim()
          env.CLOUDFRONT_DISTRIBUTION_ID = sh(
            script: 'aws ssm get-parameter --region "$AWS_REGION" --name "$DISTRIBUTION_PARAMETER" --query Parameter.Value --output text',
            returnStdout: true
          ).trim()
        }

        sh '''
          set -eu

          aws s3 sync out/ "s3://${DEPLOY_BUCKET}/" \
            --region "$AWS_REGION" \
            --delete \
            --cache-control "public,max-age=3600"

          if [ -d out/_next/static ]; then
            aws s3 cp out/_next/static/ "s3://${DEPLOY_BUCKET}/_next/static/" \
              --region "$AWS_REGION" \
              --recursive \
              --cache-control "public,max-age=31536000,immutable"
          fi

          aws s3 cp out/ "s3://${DEPLOY_BUCKET}/" \
            --region "$AWS_REGION" \
            --recursive \
            --exclude "*" \
            --include "*.html" \
            --include "*.txt" \
            --include "robots.txt" \
            --include "sitemap.xml" \
            --cache-control "no-cache,no-store,must-revalidate"

          aws cloudfront create-invalidation \
            --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
            --paths '/*'
        '''
      }
    }
  }

  post {
    always {
      archiveArtifacts allowEmptyArchive: true, artifacts: 'out/**'
    }
  }
}
