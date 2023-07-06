pipeline {
    agent any

    environment {
        PORT = '<your port>'
    }

    stages {
        stage('Build Client') {
            steps {
                script {
                    echo 'Building Client'
                    sh '''
                    docker build -t ohad-jenkins;
                    docker run -name ohad-jenkins-container ohad-image
                    docker cp ohad-jenkins-container:app/build ./server/client-build
                    '''
                }
            }
        }

        stage('Build Server') {
            steps {
                sh '''
                    echo "Building Server"
                    docker build -t ohad-server-image;
                    docker run -d -p 7042:8000 -name server-container ohad-server-image;

                '''
            }
        }

        stage('Deploy Server') {
            steps {
                script {
                    echo 'Deploying'
                }
            }
        }
    }
}
