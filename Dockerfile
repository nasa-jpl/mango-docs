FROM node:lts-alpine

WORKDIR /app

COPY package.json /app/

RUN yarn install --frozen-lockfile

COPY . /app/

RUN yarn build

EXPOSE 3000

CMD ["yarn", "serve"]