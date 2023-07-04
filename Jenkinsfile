pipeline {
    agent any
    environment {
        PORT = 8010
    }
    stages {
        stage('build client') {
            steps {
                script {
                    echo 'Building Client'
                    try {
                        sh '''
                            cd client
                            echo building docker image
                            docker build -t client:latest .
                            echo building \\& copying react build...
                            docker run --name client-build client:latest
                            docker cp client-build:app/build ../server/client-build
                            echo finished copying, deleting stopped container
                            docker container rm client-build 
                        '''
                    } catch (error2) {
                        try {
                            sh 'docker container rm client-build'
                        }
                        catch(error1) {
                            echo error1
                        }
                        error error2
                    }
                }
            }
        }
        stage('building server') {
            steps {
                sh '''
                    cd ../server
                    echo building docker image
                    docker build -t server:latest .
                '''
            }
        }
        stage('deploy server') {
            steps {
                echo 'deploying'
                sh """
                    docker run -d -p $PORT:8000 server:latest
                """
            }
        }

        stage('health check') {
            steps {
                echo "health check:)"
                sh """
                    wget http://localhost:$PORT/api/health;
                    if [ \$? = 0 ]; 
                    then echo SUCCESS;
                    else echo FAILED:(;
                """
            }
        }
    }
}


