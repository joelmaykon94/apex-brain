# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire app code into the container
COPY . .

# Build the React app for production
RUN npm run build

# Expose the desired port (replace 3000 with the actual port your app uses)
EXPOSE 3000

# Define the command to run your app
CMD [ "npm", "start" ]
