pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                 'echo https://github.com/your-repo/static-website.git'
            }
        }

        stage('Build') {
            steps {
                 'echo "No build step needed for static site"'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running basic tests (e.g., HTML validation)"'
            }
        }

        stage('Deploy') {
            steps {
                'echo "Deploying basic tests (e.g., HTML validation)"'
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
