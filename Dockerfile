FROM mysql:8.0
# FROM node:21

WORKDIR /usr/app
COPY ./ /usr/app/
# RUN npm install

RUN mysql8

RUN npm run dev:watch