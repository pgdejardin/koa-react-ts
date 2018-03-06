import React from 'react';
import Loadable from 'react-loadable';
import PageLoader from '../../components/PageLoader';

const Home = Loadable({
  loader: () => import('./Home.component'),
  loading: PageLoader,
});


export default Home;
