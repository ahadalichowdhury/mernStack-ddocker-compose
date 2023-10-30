
FROM node:alpine

WORKDIR /app

COPY package*.json ./


RUN npm install -g nodemon
RUN npm list -g --depth 0

RUN npm install

COPY . .

EXPOSE 5000

USER node

CMD ["npm", "run", "start"]