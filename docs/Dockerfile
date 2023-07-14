#stage 1
FROM node:16.14.2-buster-slim as build

ARG URL_API 
ARG TOKEN

WORKDIR /app

COPY . /app


RUN yarn \
    && yarn build \

RUN yarn global add mintlify


EXPOSE 3001

CMD ["mintlify dev"]