pipeline {
    agent any
    environment {
        PORT = 8103
    }
    stages {
        stage('build client') {
            steps {
                sh """
                    docker image build -t client
                    docker run --name client-jcontainer
                    docker cp client-jcontainer:/app/build ../../projects/docker-builds
                    serve ../../projects/docker-builds/client-jcontainer
                    echo Building Client
                """
            }
        }
        stage('building server') {
            steps {
                sh """
                    cd server
                    docker image build -t server
                    docker run -p 8000:$PORT server
                    echo building docker image
                """
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