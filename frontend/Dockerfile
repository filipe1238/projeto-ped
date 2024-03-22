# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json to the container
COPY package*.json ./
RUN npm install --production

# Copy the entire project directory to the container
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight, official Nginx image as a parent image for serving the React app
FROM nginx:alpine

# Copy the built React app from the build stage to the Nginx web server's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for serving the application
EXPOSE 80

# Start the Nginx web server when the container starts
CMD ["nginx", "-g", "daemon off;"]