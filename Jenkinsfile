pipeline {
    agent any
    environment {
        PORT = 8087
    }
    stages {
        stage('build client') {
            steps {
                script {
                    sh '''
                        cd client
                        docker build -t client_image .
                        docker run --name my_container client_image
                        docker cp my_container:app/build ../server/client-build
                    '''
                }
            }
        }
        stage('building server') {
            steps {
                sh '''
                    cd server
                    docker build -t my_server   .
                    docker run -d -p 8078:8000 --name my_container my_server
                '''
            }
        }
        stage('deploy server') {
            steps {
                script {
                    echo 'deploying'
                }
            }
        }

        stage('health check') {
            steps {
                echo 'health check:)'
                sh """
wget http://localhost:$PORT/api/health;
if [ \$? = 0 ];
then echo SUCCESS;
else echo FAILED:\\(;
fi
"""
            }
        }
    }
}
