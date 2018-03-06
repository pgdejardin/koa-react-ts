import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as morgan from 'koa-morgan';
import * as cors from '@koa/cors';
import * as bodyParser from 'koa-bodyparser';

import { routes as upload } from './api/upload';
import errors from './middlewares/errors';
import DevelopmentMiddleware from './middlewares/development';
import productionMiddleware from './middlewares/production';
import logger, { appStarted } from './utils/logger';
import argv from './utils/argv';
import port from './utils/port';

const app = new Koa();
const router = new Router({ prefix: '/api' });
const isProd = process.env.NODE_ENV === 'production';
const ngrok = (!isProd && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;

// http logger
app
  .use(morgan('common'))
  .use(errors)
  .use(cors())
  .use(bodyParser());

router
  .use('/upload', upload().routes());

app
  .use(router.routes())
  .use(router.allowedMethods());


if (isProd) {
  productionMiddleware(app);
} else {
  DevelopmentMiddleware(app);
}

const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

app.listen(port, host, () => {
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      appStarted(port, prettyHost, url);
    });
  } else {
    appStarted(port, prettyHost);
  }
});
