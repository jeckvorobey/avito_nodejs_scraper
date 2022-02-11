FROM node:16.10.0-alpine3.12

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
COPY .eslintrc.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]