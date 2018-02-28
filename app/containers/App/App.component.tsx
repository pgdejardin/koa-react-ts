import * as React from 'react';
import { hot } from 'react-hot-loader';

import { Home } from '../Home';
import { AppBar } from '../../components/AppBar';
import { Reboot } from 'material-ui';

export function App() {
  return <React.Fragment>
    <Reboot />
    <AppBar />
    <Home />
  </React.Fragment>;
}

export default hot(module)(App);
