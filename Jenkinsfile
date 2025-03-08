pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/your-repo/static-website.git'
            }
        }

        stage('Build') {
            steps {
                sh 'echo "No build step needed for static site"'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running basic tests (e.g., HTML validation)"'
            }
        }

        stage('Deploy') {
            steps {
                sshagent(['your-ssh-credential-id']) {
                    sh 'scp -r * user@your-server:/var/www/html/'
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
}
