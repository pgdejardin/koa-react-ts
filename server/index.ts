import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as morgan from 'koa-morgan';
import * as cors from '@koa/cors';
import * as bodyParser from 'koa-bodyparser';
import * as serve from 'koa-static';
import * as send from 'koa-send';
import * as path from 'path';
import * as config from 'config';

import logger from './utils/logger';
import errors from './middlewares/errors';
import { routes as upload } from './api/upload';
import webpackDevMiddleware from './middlewares/webpack.dev';

const app = new Koa();
const PORT = process.env.PORT || config.get('port') || '3000';
const router = new Router({ prefix: '/api' });
const isProd = process.env.NODE_ENV === 'production';

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
  const outputPath = path.resolve(process.cwd(), 'build/public');

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets).
  // app.use(compression());
  app.use(serve(outputPath));

  app.use(async ctx => await send(ctx, path.resolve(outputPath, 'index.html')));
} else {
  webpackDevMiddleware(app);
}

app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
});
