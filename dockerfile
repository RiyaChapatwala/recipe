# Use an official Node.js runtime as the base image
FROM node:18.13.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install -f

# Copy the entire project directory into the container
COPY . .

# Build the React app
RUN npm run build

# # Specify the destination folder
# # ARG DESTINATION_FOLDER=/var/www/dev.paid.com.jenkins
# ARG DESTINATION_FOLDER=/D/projects/paid

# # Move the build to the destination folder
# RUN mv /app/build $DESTINATION_FOLDER

# # Expose a port if necessary
# EXPOSE 80

# Start your application or service (adjust as needed)
CMD ["npm", "start"]
