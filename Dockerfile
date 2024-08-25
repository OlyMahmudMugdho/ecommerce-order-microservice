FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8084
RUN npm run build
ENTRYPOINT [ "node", "dist/index.js" ]