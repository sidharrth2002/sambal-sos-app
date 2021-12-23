FROM node:12.18.2-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

EXPOSE 3000

ENV NODE_ENV development

COPY ./package*.json ./

RUN npm install

CMD ["npm", "run", "dev"]

