FROM node:18-alpine

WORKDIR /mangahay-fe

COPY package*.json ./

RUN npm install

COPY . .

RUN yarn build

# Expose the port Next.js uses (usually 3000)
EXPOSE 3002

# Start the Next.js application
CMD ["yarn", "start"]
