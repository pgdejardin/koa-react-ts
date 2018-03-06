import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';

// Import CSS reset and Global Styles
import './global-style';

// Observe loading of Roboto (to remove Roboto, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Roboto', {});

// When Roboto is loaded, add a font-family using Roboto to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

import App from './containers/App';

ReactDOM.render(<App/>, document.getElementById('app'));
