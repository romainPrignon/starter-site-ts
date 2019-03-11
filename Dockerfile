FROM node:10

WORKDIR /opt

COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY server server
COPY src src
COPY public public
COPY type type

# workaround
COPY node_modules node_modules

RUN npm run build

ENV PATH=/opt/node_modules/.bin:$PATH
USER node

CMD ["npm", "start"]
