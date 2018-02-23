import * as Koa from 'koa';
import * as config from 'config';
import * as morgan from 'koa-morgan';
import logger from './utils/logger';

const app = new Koa();
const PORT = process.env.PORT || config.get('port') || '3000';

// http logger
app.use(morgan('common'));

app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
});
