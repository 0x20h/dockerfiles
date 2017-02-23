# statsd

based on `alpine` and `node 7` use this image to run a [statsd](https://github.com/etsy/statsd) server.

## Usage

```
docker run -p 8125:8125/udp 0x20h/statsd
```

## Environment variables

The following variables can be overwritten via environment variables:

- `STATSD_GRAPHITE_HOST`: localhost
- `STATSD_GRAPHITE_PROTOCOL`: text
- `STATSD_GRAPHITE_PORT`: 2003
- `STATSD_GRAPHITE_PICKLE_PORT`: 2004
- `STATSD_GRAPHITE_GLOBAL_PREFIX`: stats
- `STATSD_DEBUG`: false
- `STATSD_DUMP_MESSAGES`: false
- `STATSD_FLUSH_INTERVAL`: 10000

To configure your own configuration you can also mount a custom
[config.js](https://raw.githubusercontent.com/etsy/statsd/master/exampleConfig.js).

```
docker run -v config.js:/statsd/config.js -p 8125:8125/udp 0x20h/statsd
```

