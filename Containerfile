FROM node:lts-alpine

WORKDIR /app

COPY . /app/

# Venue-specific parameters to be injected at runtime
ENV MANGO_HOST_URL=http://PLACEHOLDER_MANGO_HOST_URL

RUN npm i

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]

CMD ["node", "server.js"]
