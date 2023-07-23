pipeline {
    agent any
    environment {
        PORT = 8102
    }
    stages {
        stage('build client') {
            steps {
                sh """
                    echo 'Building Client'
                    cd client
                    docker build . -t client-image
                    docker run -d client -p 8080:$POST client-image
                    docker cp client:/app/build ./server:/app 
                """
            }
        }
        stage('building server') {
            steps {
                sh """
                    echo building server
                    cd server
                    docker build . -t server-image
                """
            }
        }
        stage('deploy server') {
            steps {
                sh """
                    echo deploying
                    docker run -d server -p 8080:$POST server-image 
                """
            }
        }
        stage('health check') {
            steps {
                echo 'health check:)'
                sh """
                    wget http://localhost:$PORT/api/health;
                    if [ \$? = 0 ];
                    then echo SUCCESS;
                    else echo FAILED:(;
                    fi
                """
            }
        }
    }
}
