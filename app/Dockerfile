FROM node:12.4.0-alpine

WORKDIR /usr/app

COPY package.json package-lock.json ./

RUN npm install

COPY . /usr/app

COPY .env /usr/app/.env

EXPOSE 8000

CMD ["npm", "start"]