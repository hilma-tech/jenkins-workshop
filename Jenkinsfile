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
                    docker build -t ohadJenkinsImage .;
                    docker run --name ohadJenkinsContainer ohadJenkinsImage
                    docker cp ohadJenkinsContainer:app/build ../server/client-build
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
