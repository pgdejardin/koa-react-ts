import * as path from 'path';
import * as compress from 'koa-compress';
import * as serve from 'koa-static';
import * as send from 'koa-send';

export default function productionMiddleware(app) {
  const outputPath = path.resolve(process.cwd(), 'build/public');

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets).
  app.use(compress());
  app.use(serve(outputPath));

  app.use(ctx => send(ctx, path.resolve(outputPath, 'index.html')));
}
