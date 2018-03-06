import * as config from 'config';
import argv from './argv';

export default parseInt(argv.port || process.env.PORT || config.get('port') || '8080', 10);
