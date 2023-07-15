#stage 1
FROM node:19

WORKDIR /app

COPY . .

RUN yarn global add mintlify

#RUN mintlify install

EXPOSE 3001

ENTRYPOINT ["sh", "-c", "mintlify install && mintlify dev"]