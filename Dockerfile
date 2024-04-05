FROM ubuntu/mysql:latest
FROM node:21

WORKDIR /usr/app
COPY ./ /usr/app/
RUN npm install

RUN mysql

RUN npm run dev:watch