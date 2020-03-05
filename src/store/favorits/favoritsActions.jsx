export const SET_PRODUCTS_IDS = 'SET_PRODUCTS_ID';
export const FILTER_PRODUCTS_IDS = 'FILTER_PRODUCTS_IDS';

export const setProductsId = id => {
  return {
    type: SET_PRODUCTS_IDS,
    payload: id
  };
};

export const filterProductsId = id => {
  return {
    type: FILTER_PRODUCTS_IDS,
    payload: id
  };
};
