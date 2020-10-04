import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import store from './store';
import history from './store/History';
import * as serviceWorker from './serviceWorker';

import '../node_modules/bulma/css/bulma.min.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.Store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
