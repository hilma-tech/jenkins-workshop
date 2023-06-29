pipeline {
    agent any
    environment {
        PORT = 8010
    }
    stages {
        stage('build docker images') {
            steps {
                echo 'Building..'
                  sh '''
                    cd client
                    docker build -t client:latest .
                    cd ../server
                    docker build -t server:latest .
                '''
            }
        }
        stage('Serve client') {
            steps {
                echo "serveing client..."
                sh '''
                    docker container prune --force 
                    docker run --name client-build client:latest
                    docker cp client-build:app/build ./client-build
                    serve -s ./client-build
                '''
            }
        }
        stage('Deploy server') {
            steps {
                echo 'deploying'
                sh '''
                    docker run -d -p 8010:8000 server:latest
                '''
            }
        }

        stage('Health check') {
            steps {
                echo "health check:)"
                sh '''
                    wget http://localhost:$PORT/api/health;
                    if [ $? = 0 ]; 
                    then echo SUCCESS;
                    else echo FAILED:(;
                '''
            }
        }
    }
}


