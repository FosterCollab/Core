# Use the official Node.js image as a parent image
FROM node:20.8.0

# Set the directory to directory containing the Next.js app
WORKDIR /UI/map-me

# Copy package.json and package-lock.json from UI/map-me into the container
COPY map-me/package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your app's source code from UI/map-me directory into the image filesystem.
COPY map-me/ .

# Build the app for production
RUN npm run build

# Set a default value for PORT
ENV PORT 3000

# Specify the "start" command as the default command with port configuration
CMD ["npm", "start", "-p", "$PORT"]