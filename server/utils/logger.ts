import * as winston from 'winston';

const logger = new winston.Logger({
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
    trace: 4,
  },
  colors: {
    trace: 'gray',
  },
  transports: [],
  exitOnError: false,
});

console.log('Use console logger');
logger.add(winston.transports.Console, {
  handleExceptions: true,
  humanReadableUnhandledException: true,
  level: 'trace',
  timestamp: () => new Date().toISOString(),
  colorize: true,
  // json: process.env.NODE_ENV !== 'development',
  json: false,
  stringify: obj => JSON.stringify(obj, null, 2),
});

function errorToString(err) {
  if (err instanceof Error) {
    return JSON.stringify(err, ['message', 'arguments', 'type', 'name', 'stack']);
  }
  return JSON.stringify(err);
}

logger.debug('Debug mode is activated');

export { errorToString };
export default logger;
