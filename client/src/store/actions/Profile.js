import {
  FETCH_USER_PROFILE,
  UPDATE_USER_PROFILE,
} from '../constants/Profile';

export const fetchUserProfile = (payload) => {
  return {
    type: FETCH_USER_PROFILE,
    payload,
  }
}

export const updateUserProfile = (payload) => {
  return {
    type: UPDATE_USER_PROFILE,
    payload,
  }
}