# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json to the container
COPY package*.json ./
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Expose port 5173 for the React app to run on
EXPOSE 5173

# Start the React application
CMD ["npm", "start"]