import chalk from 'chalk';
import * as ip from 'ip';
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

const divider = chalk.gray('\n-----------------------------------');

// Called when express.js app starts on given port w/o errors
const appStarted = (port, host, tunnelStarted?) => {
  console.log(`Server started ! ${chalk.green('✓')}`);

  // If the tunnel started, log that and the URL it's available at
  if (tunnelStarted) {
    console.log(`Tunnel initialised ${chalk.green('✓')}`);
  }

  console.log(`
${chalk.bold('Access URLs:')}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`) +
  (tunnelStarted ? `\n    Proxy: ${chalk.magenta(tunnelStarted)}` : '')}${divider}
${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
`);
};

export { errorToString };
export { appStarted };
export default logger;
