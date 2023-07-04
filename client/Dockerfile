FROM node:14.18.1

WORKDIR /app

COPY . .

RUN npm i

CMD ["npm", "run", "build"]



# # to run in bash
# docker run image

# docker cp container-name:app/build ./build