#stage 1
FROM node:19

COPY . .

RUN yarn install

RUN yarn global add mintlify

EXPOSE 3001

CMD ["mintlify", "dev"]