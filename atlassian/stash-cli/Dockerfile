FROM ruby:2-alpine

RUN apk add --no-cache git && \
    gem install atlassian-stash

ENTRYPOINT ["stash"]
