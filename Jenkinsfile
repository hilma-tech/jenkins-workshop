pipeline {
    agent any
    environment {
        PORT = 8023
    }
    stages {
        stage('build client') {
            steps {
                script {
                    echo 'Building Client'
                    sh '''
                        cd client
                        docker build -t amit-docker-jenkins-workshop .
                        docker run - -name amit-container amit-docker-jenkins-workshop
                        docker cp amit-container:app/build ../server/client-build
                    '''

                }
            }
        }
        stage('building server') {
            steps {
                sh '''
                    echo building docker image
                    cd server
                    docker build -t amit-server .
                    docker run -d -p 8023:8000 - -name amit-server
                    ....
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