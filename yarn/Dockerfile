FROM mhart/alpine-node:base-7.0.0

RUN apk add --no-cache curl bash binutils tar git openssh python && \
  curl -o- -L https://yarnpkg.com/install.sh | sh && \
  apk del curl tar binutils && \
  mv /root/.yarn /yarn

ENTRYPOINT ["/yarn/bin/yarn"]
