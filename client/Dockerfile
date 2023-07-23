# Getting base image from Ubuntu
FROM node:18.1

# Set the working directory to /src
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY ./package*.json ./

# Run npm install to install dependencies
RUN npm install

# Copy the source code to the working directory
COPY . .

# Build command
CMD [ "npm", "run", "build" ]
