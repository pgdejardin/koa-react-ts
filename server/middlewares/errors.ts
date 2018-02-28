import { Context } from 'koa';
import IllegalArgumentException from '../errors/IllegalArgumentException';
import logger from '../utils/logger';
import NotFoundError from '../errors/NotFoundError';

export default async function (ctx: Context, next: () => Promise<any>) {
  try {
    await next();
  } catch (err) {
    // if (err.name === 'UnauthorizedError') {
    //   ctx.status = 403;
    //   ctx.body = withError(err);
    // } else if (err instanceof IllegalArgumentException) {
    //   ctx.response.status = 400;
    //   ctx.response.body = withError(err);
    // } else if (err instanceof NotFoundError || err.name === 'NotFoundError') {
    //   logger.warn('Unhandled error', err);
    //   ctx.response.status = 404;
    //   ctx.response.body = withError(err);
    // } else if (err.name === 'ValidationError') {
    //   ctx.response.status = 400;
    //   ctx.response.body = withError(err);
    // } else {
    // logger.warn('', err);
    logger.error(err);
    // ctx.response.status = 500;
    // ctx.response.body = withError(err);
    ctx.throw(500, withError(err));
    // }
  }
}

function withError(err: any) {
  if (err instanceof Error) {
    return { message: err.message };
  }
  return err;
}
