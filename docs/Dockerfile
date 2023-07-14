#stage 1
FROM node:16.15-alpine
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node . .

RUN npm i -g mintlify

EXPOSE 3001

CMD ["mintlify dev"]