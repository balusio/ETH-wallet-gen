FROM node:12.18-alpine

RUN apk update && apk add --update --no-cache --virtual \
  .gyp bash python \
  make g++ git \
  openssh-client
#to use global npm instal witout root
#see https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#global-npm-dependencies
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global/

ENV PATH=$PATH:/home/node/.npm-global/bin/

RUN mkdir -p /home/choozie/ && chown -R node:node /home/choozie/

USER node

# install ganache cli
RUN npm install -g ganache-cli

# install truffle
RUN npm install -g truffle

WORKDIR /home/choozie/

COPY package.json ./

RUN ls -la

RUN npm install

# Create app directory
ENTRYPOINT ["/bin/bash","/home/choozie/server.sh"]

# DEV PORT
EXPOSE 4200
