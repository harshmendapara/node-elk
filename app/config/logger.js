const log4js = require('log4js');

log4js.configure({
  appenders: {
    console: {
      type: 'console'
    },
    logstash: {
      host: process.env.LOGSTASH_HOST,
      port: process.env.LOGSTASH_PORT,
      type: '@log4js-node/logstashudp',
      logType: 'myAppType', // Optional, defaults to 'category'
      fields: {             // Optional, will be added to the 'fields' object in logstash
        field1: 'value1',
        field2: 'value2'
      },
      layout: {
        type: 'pattern',
        pattern: '%m'
      }
    }
  },
  categories: {
    default: { appenders: ['console', 'logstash'], level: 'info' }
  }
});

const logger = log4js.getLogger('myLogger');

module.exports = logger;