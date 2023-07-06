pipeline {
    agent any
    environment {
        PORT = <your port>
    }
    stages {
        stage('build client') {
            steps {
                script {
                    echo 'Building Client'
                    sh '''
                    cd client
                        docker build -t ziv_image .
                        docker run --name ziv_container ziv_image
                        docker cp ziv_container:app/build ../server/client-build
                    '''
                }
            }
        }
        stage('building server') {
            steps {
                sh '''
                    cd server
                    docker build -t ziv_server .
                    '''
            }
        }
        stage('deploy server') {
            steps {
                script {
                    echo 'deploying'
                    sh """
                        docker run -d -p $PORT:8000 ziv_server
                    """
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
