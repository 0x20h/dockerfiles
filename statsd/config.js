{
 backends: [ "./backends/console", "./backends/graphite"],
 deleteIdleStats: true,
 graphite: {
    legacyNamespace: false,
    globalPrefix: "#STATSD_GRAPHITE_GLOBAL_PREFIX#"
 },
 graphiteHost: "#STATSD_GRAPHITE_HOST#",
 graphiteProtocol: "#STATSD_GRAPHITE_PROTOCOL#",
 graphitePort: #STATSD_GRAPHITE_PORT#,
 graphitePicklePort: #STATSD_GRAPHITE_PICKLE_PORT#,
 flushInterval: "#STATSD_FLUSH_INTERVAL#",
 debug: #STATSD_DEBUG#,
 dumpMessages: #STATSD_DUMP_MESSAGES#
}
