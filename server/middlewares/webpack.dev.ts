import * as Application from 'koa';
import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackMiddleware from 'koa-webpack';
import * as send from 'koa-send';

import logger from '../utils/logger';

export default function addDevMiddlewares(app: Application) {
  const webpackConfig = require('../../internals/webpack.dev.config.js');
  const compiler = webpack(webpackConfig);
  const middleware = webpackMiddleware({ compiler });
  const fs = middleware.dev.fileSystem;

  app.use(middleware);
  app.use((ctx) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        logger.error(err);
        ctx.throw(404);
      } else {
        logger.info(file.toString());
        send(ctx, file.toString());
      }
    });
  });
}
