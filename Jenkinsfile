pipeline {
    agent any
    environment {
        PORT = 8106
    }   
stages {
    stage('build client') {
        steps {
            script {
                echo 'Building Client'
            try{
                sh '''
                    cd client
                    echo building docker
                    docker image build -t client:latest .
                    echo image build
                    docker run --name client-build client:latest
                    echo run docker
                    docker cp client-build:app/build ../server/client-build
                    echo built container
                    docker container rm client-build 
                    echo container removed
                '''
                }
            catch(error){
                sh 'docker container rm client-build || true'
                error error
            }
         }
    }
}
    stage('building server') {
     steps {
                sh '''
                    cd server
                    echo building docker
                    docker image build -t server:latest .
                '''
                }
            }
    }
}
    stage('deploy server') {
        steps {
            script {
                echo 'deploying'
                try{
                sh 'docker stop server-container || true && docker rm server-container || true'
                }
                catch (error){
                    echo error
                }
                sh """
                echo doecker running on port
                    docker run -d -p $PORT:8000 --name server-container server:latest
                """
            }
            }
    }

    stage('health check') {
        steps {
            script{
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

