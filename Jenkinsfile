pipeline {
agent any
environment {
PORT = 8099
}
stages {
stage('build client') {
steps {
script {
echo 'Building Client'
sh '''
cd client
docker build - t yotimage .
docker run -name yoticontainer yotimage 
docker cp yoticontainer:app/build/../server/client-build
'''
}
}
}
stage('building server') {
steps {
sh '''
cd server
echo building server
docker build -t ./server
docker run -d -p 8099:8080 -n yoticontainer ./server
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
