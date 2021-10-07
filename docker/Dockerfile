### Development stage
FROM  registry-dev.cloud.inuits.io/node:14.17.6 as development-stage

WORKDIR /app
ENTRYPOINT ["/entrypoint.sh"]

COPY docker/entrypoint*.sh /
COPY package*.json ./

RUN npm install --global rollup && npm  install

COPY . .

