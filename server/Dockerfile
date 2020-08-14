# `docker build--rm --build-arg "NODE_VERSION=12.18.3-alpine3.12" -f ./Dockerfile .`
ARG NODE_VERSION=12.18.3-alpine3.12

FROM node:${NODE_VERSION}

ARG API_PORT=5000

RUN apk -U upgrade && \
  apk add netcat-openbsd && \
  apk add --no-cache bash

ENV PORT=${API_PORT}

ENV NODE_ENV=production

WORKDIR /app

COPY . ./app

RUN npm install
# npm ci --only=production

RUN npm prune --production

RUN chown -R node:node ./

USER node

EXPOSE $PORT

CMD ["npm", "start"]
