FROM node:20

RUN apt-get update
RUN apt-get install -y build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

WORKDIR /djs-bot

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT ["npm", "run", "db-start"]