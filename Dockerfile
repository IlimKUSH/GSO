FROM node:18-alpine

WORKDIR /next-docker

COPY ./package*.json ./

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY . .

EXPOSE 8089

CMD [ "npm", "run", "dev" ]