import React from 'react';

// eslint-disable-next-line import/order
import ReactDOM from 'react-dom';

import './index.css';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import { App } from 'Component/pageCard/PageCard/App';
import { store } from 'redux/store/Store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
