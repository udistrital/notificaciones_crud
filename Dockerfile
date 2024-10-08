FROM node:16.5.0-alpine
RUN apk update && apk add bash
RUN apk add python3
RUN apk add py3-pip
RUN pip3 install awscli

WORKDIR /
COPY dist dist
COPY swagger swagger
COPY node_modules node_modules
COPY entrypoint.sh entrypoint.sh
RUN chmod +x ./ entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]