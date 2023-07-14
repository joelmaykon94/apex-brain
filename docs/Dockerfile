#stage 1
FROM node:19

COPY . .

RUN yarn install

RUN yarn global add mintlify

RUN mintlify install

EXPOSE 3001

CMD ["mintlify", "install"]

CMD ["mintlify", "dev"]