FROM node:14-alpine

WORKDIR /usr/lite-web

COPY package.json /usr/lite-web/package.json

RUN yarn

COPY . /usr/lite-web

RUN yarn build

CMD yarn start
