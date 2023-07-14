#stage 1
FROM node:19
USER node
COPY . /app
RUN yarn install

RUN yarn global add mintlify

EXPOSE 3001

CMD ["mintlify", "dev"]