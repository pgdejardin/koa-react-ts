import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as morgan from 'koa-morgan';
import * as cors from '@koa/cors';
import * as config from 'config';
import * as bodyParser from 'koa-bodyparser';

import logger from './utils/logger';
import errors from './middlewares/errors';
import { routes as upload } from './api/upload';

const app = new Koa();
const PORT = process.env.PORT || config.get('port') || '3000';

const router = new Router({ prefix: '/api' });

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

app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
});
