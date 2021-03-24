FROM node:14.16.0-buster AS node-base

WORKDIR /Shipyard-Documentation

COPY ./package.json ./yarn.lock ./
RUN yarn install

COPY ./ ./
RUN yarn run build

FROM debian:10

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]

RUN apt-get update -y && apt-get install --no-install-recommends -y \
	ca-certificates \
	nginx \
	&& apt-get autoremove -y \
	&& apt-get clean \
	&& rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=node-base /Shipyard-Documentation/build/ /Shipyard-Documentation/build/docs/
