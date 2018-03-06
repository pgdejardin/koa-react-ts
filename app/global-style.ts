import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: sans-serif;
  }
  
  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }
`;
