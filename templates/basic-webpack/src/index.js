// Needed for redux-saga es6 generator support
import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/index';

// Import styles
import './styles/styles.scss';

// Main APP init
ReactDOM.render(<App />, document.getElementById('app'));

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'staging'
) {
  require('@lcdp/offline-plugin/runtime').install(); // eslint-disable-line global-require
}
