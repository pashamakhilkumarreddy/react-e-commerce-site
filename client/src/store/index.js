import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import * as AuthenticationReducers from './reducers/Authentication';
import * as ProfileReducers from './reducers/Profile';
import * as AlertsReducers from './reducers/Alerts';
import history from './History';

const reducers = {
  authentication: AuthenticationReducers.reducer,
  profile: ProfileReducers.reducer,
  alerts: AlertsReducers.reducer,
}

const persistConfig = {
  key: 'root',
  storage,
}

const logger = createLogger({
  predicate: process.env.NODE_ENV === 'development',
});
const middlewares = [routerMiddleware(history), thunk, logger];

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ...reducers,
});

const Store = createStore(
  persistReducer(persistConfig, rootReducer(history)),
  composeWithDevTools(
    applyMiddleware(...middlewares),
  )
);

const storeRegistration = ([name, obj]) => {
  if (typeof obj.registerStore === 'function') {
    obj.registerStore(Store);
  }
}

Object.entries({
  AuthenticationReducers,
}).forEach(storeRegistration);

const persistor = persistStore(Store);

export default {
  Store,
  persistor,
};