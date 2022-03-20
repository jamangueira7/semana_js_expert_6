FROM node:17-slim

RUN apt-get update \
  && apt-get install -y sox libsox-fmt-mp3

# libsox-fmt-all

WORKDIR /semana_js_expert_6/

COPY package.json package-lock.json /semana_js_expert_6/

RUN npm ci --silent

COPY . .

USER node

CMD npm run live-reload
