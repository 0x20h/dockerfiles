# Collection of useful™ dockerfiles

## Conventions

I usually set the working dir to `/project` and an default `entrypoint` so you can run the image like

```
docker run -v $PWD:/project 0x20h/<image> [args]
```

## File Listing

- [create-react-app](create-react-app/README.md)
- [PHP composer](composer/README.md)
- [statsd](statsd/README.md)
- [graphite-web](graphite/graphite-web/README.md)
- [carbon-cache](graphite/carbon-cache/README.md)
- [carbon-relay](graphite/carbon-relay/README.md)

## Environments

- [graphite-grafana-statsd](graphite/docker-compose.yml)
- [kong](kong/README.md)

