FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy all files
COPY ./ ./

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

ENV NEXT_PUBLIC_GOOGLE_MAPS_API_KEY print(os.getenv('INPUT_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY'))
ENV NEXT_PUBLIC_RECAPTCHA_SITE_KEY print(os.getenv('INPUT_NEXT_PUBLIC_RECAPTCHA_SITE_KEY'))
ENV RECAPTCHA_SECRET_KEY print(os.getenv('INPUT_RECAPTCHA_SECRET_KEY'))

# Launch app with PM2
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
