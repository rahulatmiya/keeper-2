# Use the official node image from Docker Hub
FROM node:16

# Working Directory the static website files from the current directory into the Nginx container
WORKDIR ./KEEPER-APP-2/src

# Copy package.json files and install dependencies
COPY package*.json ./
RUN npm install

COPY . .

# Expose port 80 so the container can be accessed from outside
EXPOSE 8090

# Command to run the Nginx server
CMD ["npm", "run", "dev"]
