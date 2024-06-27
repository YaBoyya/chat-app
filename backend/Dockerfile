FROM node:latest

EXPOSE 8000
WORKDIR /backend

COPY package*.json /backend/

RUN npm install

COPY . /backend/

RUN npm run build

CMD ["npm", "run", "start:dev"]
