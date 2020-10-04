import {
  SUCCESS_ALERT,
  INFO_ALERT,
  WARNING_ALERT,
  ERROR_ALERT,
} from '../constants/Alerts';
import * as AlertActions from './index';

const initialState = {};
const actionsHandlers = [];

export const {
  addAction,
  rootReducer,
} = AlertActions.buildReducer(
  initialState,
  actionsHandlers,
);

export const reducer = rootReducer;

const notificationTypes = {
  SUCCESS_ALERT: 'success',
  INFO_ALERT: 'info',
  WARNING_ALERT: 'warning',
  ERROR_ALERT: 'error',
}

addAction([SUCCESS_ALERT, INFO_ALERT, WARNING_ALERT, ERROR_ALERT], (action, state, payload) => {
  const type = notificationTypes[action];
  if (!type) {
    console.warn('Unrecognized alert type');
    return state;
  }
  return Object.assign({}, state, {
    message: payload.message,
    type,
  })
})