#stage 1
FROM node:16.14.2-buster-slim as build

WORKDIR /app

COPY . /app

RUN yarn global add mintlify

EXPOSE 3001

CMD ["mintlify dev"]