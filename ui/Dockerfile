# Use the official Node.js image as a parent image
FROM node:20.8.0

# Set the directory to directory containing the Next.js app
WORKDIR /ui

# Copy package.json and package-lock.json from ui into the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your app's source code from ui directory into the image filesystem.
COPY ./ .

# Build the app for production
RUN npm run build

# Set a default value for PORT
ENV PORT 3000 \
	SKIP_ENV_VALIDATION=true

# Specify the "start" command as the default command with port configuration
CMD ["npm", "start", "-p", "$PORT"]