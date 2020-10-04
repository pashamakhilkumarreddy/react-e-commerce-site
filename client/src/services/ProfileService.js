import Api from './Api';

import { profile } from '../utils/constants';

export default {
  getProfile() {
    return Api().get(profile)
  },
  updateProfile(userData = {}) {
    return Api().put(profile, {
      ...userData,
    })
  }
}