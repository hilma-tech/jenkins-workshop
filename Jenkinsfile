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
