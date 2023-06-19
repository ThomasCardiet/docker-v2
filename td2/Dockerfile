FROM node:19-alpine

WORKDIR /usr/src/app

COPY ./src .
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]