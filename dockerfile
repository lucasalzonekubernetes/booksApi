FROM node:17-alpine

COPY package*.json ./
COPY *.html ./
COPY *.js ./

RUN npm cache clear --force && npm install

ENTRYPOINT ["node", "index.js"]