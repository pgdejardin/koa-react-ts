"use strict";
exports.__esModule = true;
var winston = require("winston");
var logger = new winston.Logger({
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        debug: 3,
        trace: 4
    },
    colors: {
        trace: 'gray'
    },
    transports: [],
    exitOnError: false
});
console.log('Use console logger');
logger.add(winston.transports.Console, {
    handleExceptions: true,
    humanReadableUnhandledException: true,
    level: 'trace',
    timestamp: function () { return new Date().toISOString(); },
    colorize: true,
    json: process.env.NODE_ENV !== 'development',
    stringify: function (obj) { return JSON.stringify(obj); }
});
function errorToString(err) {
    if (err instanceof Error) {
        return JSON.stringify(err, ['message', 'arguments', 'type', 'name', 'stack']);
    }
    return JSON.stringify(err);
}
exports.errorToString = errorToString;
logger.debug('Debug mode is activated');
exports["default"] = logger;
