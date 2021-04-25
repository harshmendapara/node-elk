
// v3
// const {createLogger, transports} = require('winston');
// require('winston-logstash');

// var logger = createLogger({
//     transports: [
//         new transports.Logstash({
//             port: process.env.LOGSTASH_PORT,
//             host: process.env.LOGSTASH_HOST,
//             node_name: "my node",
//             ssl_enable: false,
//             max_connect_retries: -1
//         })
//     ],
//     exitOnError: false, // do not exit on handled exceptions
// });

// module.exports = logger;

//v2
const winston = require('winston');
require('winston-logstash');

var logger = new winston.Logger({
    transports: [
        new winston.transports.Logstash({
            port: process.env.LOGSTASH_PORT,
            host: process.env.LOGSTASH_HOST,
            node_name: "my node",
            ssl_enable: false,
            max_connect_retries: -1
        })
    ],
    exitOnError: false, // do not exit on handled exceptions
});

module.exports = logger;