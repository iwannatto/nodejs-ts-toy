FROM mysql:8.0
FROM node:21

RUN npm install
RUN npm run dev:watch