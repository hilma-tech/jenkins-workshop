
pipeline {
    agent any
    environment {
        PORT = 8109
        DOCKER_NAME_CLIENT = 'jenkins'
        DOCKER_NAME_SERVER = 'jenkins-2'
    }
    stages {
        stage('build client') {
            steps {
                script {
                    echo 'Building Client'
                    sh '''
    cd client
    docker image build -t client .
    docker run --name ${DOCKER_NAME_CLIENT} client
    docker cp ${DOCKER_NAME_CLIENT}:docker/build ./build
    serve build
    cd ../
'''
                }
            }
        }
        stage('building server') {
            steps {
                sh '''
    cd server
    echo building docker image
    docker image build -t server .
    docker run -p 8000:8000 --name ${DOCKER_NAME_SERVER} server
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
