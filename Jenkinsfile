pipeline {
    agent any
    environment {
        PORT = "8101"
    }
    stages {
        stage('Build Client') {
            steps {
               sh  '''
                    echo 'Building Client'
                    cd client
                    echo building client docker image
                    docker build . -t client-image
                    echo runing client docker continer
                    # docker run
                    docker stop $(docker ps -aq)
                    docker rm $(docker ps -aq)
                    docker run -d --rm --name client-jenkins-container -p 8080:$PORT client-image
                    # docker copy
                    docker cp client-container:app/build ../server/client-build
                    '''
                }
            
        }
        stage('Building Server') {
            steps {
                sh '''
                    cd server
                    echo building docker image
                    # Add your build commands here
                    docker build . -t server-image 
                
                '''
            }
        }
        stage('Deploy Server') {
            steps {
                
                    sh '''
                        echo 'Deploying'
                        echo runing server docker continer
                        # docker run
                        docker run -d --rm --name server-jenkins-container -p 8080:$PORT  server-image
                    '''
                }
            
        }
        stage('Health Check') {
            steps {
                echo 'Health check :)'
                sh """
                    wget http://localhost:$PORT/api/health;
                    if [ \$? -eq 0 ];
                    then
                        echo SUCCESS;
                    else
                        echo FAILED :(
                    fi
                """
            }
        }
    }
}
