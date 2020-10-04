import {
  REGISTER,
  LOGIN,
  LOGOUT,
} from '../constants/Authentication';
import {
  displayErrorMessage
} from '../actions/Alerts';
import AuthenticationService from '../../services/AuthenticationService';

const _next = () => {};

export const register = (payload) => {
  return function (dispatch) {
    return AuthenticationService.register(payload)
      .then((res) => {
        dispatch({
          type: REGISTER,
          payload: res?.data?.data,
        })
      }).catch(err => {
        console.error(err);
        return dispatch(displayErrorMessage('error'))
      })
  }
}

export const login = (payload) => {
  return function (dispatch) {
    return AuthenticationService.login(payload)
      .then(res => {
        dispatch({
          type: LOGIN,
          payload: res.data.data,
        })
      }).catch(err => {
        console.error(err);
        return dispatch(displayErrorMessage('error'))
      })
  }
}

export const logout = (payload) => {
  return {
    type: LOGOUT,
    payload,
  }
}

export default {
  register,
  login,
  logout,
}