import * as Application from 'koa';
import * as path from 'path';
import * as webpack from 'webpack';
import * as send from 'koa-send';
import * as devMiddleware from 'webpack-dev-middleware';
import * as hotMiddleware from 'webpack-hot-middleware';
import * as koa2Connect from 'koa2-connect';

import logger from '../utils/logger';

export default function addDevMiddlewares(app: Application) {
  const webpackConfig = require('../../internals/webpack.dev.config.js');
  const compiler = webpack(webpackConfig);
  const expressDevMiddleware = devMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: 'errors-only',
  });
  const expressHotMiddleware = hotMiddleware(compiler);
  const fs = expressDevMiddleware.fileSystem;

  // convert to koaMiddleware!
  app.use(koa2Connect(expressDevMiddleware));
  app.use(koa2Connect(expressHotMiddleware));

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
