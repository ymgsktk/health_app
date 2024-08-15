FROM node:16.20.0-alpine
WORKDIR /usr/src/app


COPY package*.json ./

# Install dependencies
RUN npm install -g next@14.2.4

RUN npm install react-router-dom@6.26.0

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
#CMD ["npm", "start"]