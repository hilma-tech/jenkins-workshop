pipeline {
agent any
environment {
PORT = 8088
}
stages {
stage('build client') {
steps {
script {
echo 'Building Client'
sh '''
cd client
docker build -t noya-docker .
docker container rm noya-container || true
docker run --name noya-container noya-docker
docker cp noya-container:app/build ../server/client-build

....
'''

}
}
}
stage('building server') {
steps {
sh '''
cd server 
echo building docker image
docker build -t noya-docker-server .
'''
}
}
stage('deploy server') {
steps {
script {
echo 'deploying'
sh '''
docker container rm noya-container || true
docker run -d -p 8088:8000 --name noya-container-server noya-docker-server
'''
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



