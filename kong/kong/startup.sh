#!/bin/sh

# wait for DB to come up
if [ -z "$KONG_DATABASE" ]; then
	echo "KONG_DATABASE environment empty. aborting..."
	exit 1;
fi

if [ "$KONG_DATABASE" = "cassandra" ]; then
	PORT=9042
else 
	PORT=5432
fi

echo "checking host $KONG_PG_HOST:$PORT for connectivity..."
until $(nc -w1 $KONG_PG_HOST $PORT 2> /dev/null); do sleep 1; echo waiting for $KONG_DATABASE server on port $PORT...; done;

echo "sleeping to let database initialize..."
sleep 2;

# apply migrations
/docker-entrypoint.sh kong migrations up

# normal startup
/docker-entrypoint.sh kong start
