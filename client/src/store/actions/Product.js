import {
  ADD_PRODUCT,
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from '../constants/Product';

export const addProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload,
  }
}

export const fetchProduct = (payload) => {
  return {
    type: FETCH_PRODUCT,
    payload,
  }
}

export const fetchProducts = (payload) => {
  return {
    type: FETCH_PRODUCTS,
    payload,
  }
}

export const updateProduct = (payload) => {
  return {
    type: UPDATE_PRODUCT,
    payload,
  }
}

export const deleteProduct = (payload) => {
  return {
    type: DELETE_PRODUCT,
    payload,
  }
}