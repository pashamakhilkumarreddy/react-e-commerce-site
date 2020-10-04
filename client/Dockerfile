# `docker build --rm --build-arg "NODE_VERSION=12.18.3-alpine3.12" -f ./Dockerfile `
ARG NODE_VERSION=12.18.3-alpine3.12 

FROM node:${NODE_VERSION} as build

ARG API_PORT=5000

RUN apk -U upgrade && \
  apk add netcat-openbsd && \
  apk add --no-cache bash

ENV PATH /app/node_modules/.bin:$PATH

ENV PORT=${API_PORT}

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

RUN npm prune --production

COPY . ./

RUN chown -R node:node ./

USER node

EXPOSE $PORT

CMD [ "npm", "run", "prod" ]

#prod

FROM nginx:stable-alpine

RUN apk -U upgrade && \
  apk add netcat-openbsd && \
  apk add --no-cache bash

COPY --from=build /app/build /usr/share/nginx/html

COPY .nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]