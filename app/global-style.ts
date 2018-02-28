import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
  
  //body.fontLoaded {
  //  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  //}

  #app {
    //background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
`;
