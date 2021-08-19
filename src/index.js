import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens/App/App';

import { configureStore } from './store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './core/theme/globals';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
