# Kong

[Kong](https://getkong.org/) setup using `postgres` and `pgbi/kong-dashboard`.
I changed the default `kong:0.11` image in order to

- wait for the database to be available
- apply migrations before startup

See [Dockerfile](kong/Dockerfile)

## Usage

```
docker-compose up
```
