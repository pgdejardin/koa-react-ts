import * as Loadable from 'react-loadable';
import Loading from '../../components/Loading';

export default Loadable({
  loader: () => import('./Home.component'),
  loading: Loading,
});

