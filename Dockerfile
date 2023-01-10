FROM --platform=linux/amd64 node:latest

WORKDIR /work/

COPY ./package.json /work/package.json

RUN npm install

COPY . /work/

CMD node .
