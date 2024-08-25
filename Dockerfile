FROM node:20-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM build
COPY dist .
EXPOSE 8084
CMD [ "node", "dist/index.js" ]