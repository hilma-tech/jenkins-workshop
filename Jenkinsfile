pipeline {
    agent any
    environment {
        PORT = 8111
    }
    stages {
        stage('build client') {
            steps {
                script {
                    echo 'Building Client'
                    sh '''
                    cd client
                    echo building docker image
                    docker build -t client .
                    docker run --name zohar2 client
docker cp zohar2:app/build ../server/client-build
                    '''
                }
            }
        }
        stage('building server') {
            steps {
                sh '''
                    cd server
                    echo building docker image
                    docker build -t server    .
docker run -d -p 8111:8000 --name elya server
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
                sleep 20
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

pipeline {
    agent any
    environment {
        PORT = 8111
    }
    stages {
        stage('build client') {
            steps {
                script {
                    echo 'Building Client'
                }
            }
        }
        stage('building server') {
            steps {
                sh '''
cd server
echo building docker image
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
