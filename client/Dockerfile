FROM node:14.18.1 AS stage

WORKDIR /app

COPY . .

RUN npm i

CMD ["npm", "run", "build"]