# Use the official Node.js 14 image as the base image
FROM node:alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the app
RUN npm run build

# Use a smaller image for deployment
FROM nginx:alpine

# Copy the build output to replace the default Nginx contents
COPY --from=build /app/build /usr/share/nginx/html


EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]