# Use an official Node.js runtime as the base image
FROM node:20-alpine
WORKDIR /app


# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json to the container
COPY package*.json ./
RUN npm install --production

# Copy the entire project directory to the container
COPY . .

# Build the React app
RUN npm run build # vite build

# Use an official Nginx runtime as the base image
FROM nginx

# print the current directory
RUN pwd

# Copy the build output to replace the default Nginx contents.
COPY dist /usr/share/nginx/html

# Expose port 80 for serving the application
EXPOSE 80

# Start the Nginx web server when the container starts
CMD ["httpd-foreground"]