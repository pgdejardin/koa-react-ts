import { Context } from 'koa';
import * as Router from 'koa-router';

export function routes(): Router {
  const router = new Router();
  router.get('/', hello);

  return router;
}

async function hello(ctx: Context) {
  ctx.body = 'Hello';
}
