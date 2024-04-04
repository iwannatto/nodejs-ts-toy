FROM mysql:8.0
FROM node:21

WORKDIR /usr/app
COPY ./ /usr/app/
RUN npm install

RUN mysqld

RUN npm run dev:watch