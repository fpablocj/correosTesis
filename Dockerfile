FROM node:18.0-bullseye

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3002

RUN npm install -g nodemon

CMD ["nodemon"]
