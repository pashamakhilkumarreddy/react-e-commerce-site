import Api from './Api';
import { login as loginURL, register as registerURL } from '../utils/constants';

export default {
  login({
    email,
    password,
  }) {
    return Api().post(loginURL, {
      email,
      password,
    });
  },
  register({
    email,
    password,
  }) {
    return Api().post(registerURL, {
      email,
      password,
    });
  }
}