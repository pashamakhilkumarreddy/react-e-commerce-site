import dateFns from 'date-fns';
import * as AuthActions from './index';
import {
  REGISTER,
  LOGIN,
  LOGOUT,
} from '../constants';
import {
  user,
} from '../../utils/constants';

const initialState = {
  authenticated: false,
  isAdmin: false,
  user: {
    ...user,
  },
  tokens: {
    refreshToken: null,
    accessToken: null,
  },
}

let Store = null;

export const registerStore = (store) => {
  Store = store;
}

const actionHandlers = {}

export const {
  addAction,
  rootReducer: reducer,
} = AuthActions.buildReducer(
  initialState,
  actionHandlers,
)

addAction(REGISTER, (action, state, payload) => {
  return Object.assign({}, state, {
    authenticated: true,
  });
})

addAction(LOGIN, (action, state, payload) => {
  return {
    ...state,
    authenticated: true,
    user: {
      ...payload.user,
    },
    tokens: {
      refreshToken: payload.tokens.refresh_token,
      accessToken: payload.tokens.access_token,
    }
  };
})

addAction(LOGOUT, (action, state, payload) => {
  return state;
})

