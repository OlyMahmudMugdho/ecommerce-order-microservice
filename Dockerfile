FROM node:20-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm i typescript -g
COPY . .
EXPOSE 8084
CMD [ "npx", "ts-node", "src/index.ts" ]