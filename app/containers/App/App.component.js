import React from 'react';
import { hot } from 'react-hot-loader';
import Reboot  from 'material-ui/Reboot';

import AppBar from '../../components/AppBar';
import Home from '../Home';

export function App() {
  return <React.Fragment>
    <Reboot />
    <AppBar />
    <Home />
  </React.Fragment>;
}

export default hot(module)(App);
