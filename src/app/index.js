/**
 * app/index.js
 */
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Http } from 'services/http';
import Main from './Main';
import Router from './Router';

// Init API service
Http.init();

const App = () => (
  <BrowserRouter basename={process.env.APP_BASENAME}>
    <Main>
      <Switch>
        <Router />
      </Switch>
    </Main>
  </BrowserRouter>
);

export default App;
