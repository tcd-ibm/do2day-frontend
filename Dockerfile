# Use node alpine base image
FROM node:alpine

# Create app directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json into container
COPY package*.json ./

# Install node dependencies
RUN npm install

# Copy current directory into container
COPY . ./

# Start the application
CMD ["npm", "start"]
