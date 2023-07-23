FROM node:18.1

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

RUN echo "server is listing on 8080"

CMD [ "node", "main.js"]
