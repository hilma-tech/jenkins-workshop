
pipeline {
    agent any
    environment {
        PORT = 8109
        DOCKER_NAME_CLIENT = 'avigail-avital-client'
        DOCKER_NAME_SERVER = 'avigail-avital-server'
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
    docker cp ${DOCKER_NAME_CLIENT}:docker/build ../server/client-build
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
'''
            }
        }
        stage('deploy server') {
            steps {
                script {
                    echo 'deploying'
                    sh '''
                        docker run -p ${PORT}:${PORT} --name ${DOCKER_NAME_SERVER} server
                    '''
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
