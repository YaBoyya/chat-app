FROM node:latest

EXPOSE 3000
WORKDIR /frontend

COPY package.json /frontend/

RUN npm install

COPY . /frontend/

CMD ["npm", "run", "dev"]
