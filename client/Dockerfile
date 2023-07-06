FROM node:14.18.0
copy . /client
workdir /client
RUN npm i
cmd ["npm", "run", "build"]