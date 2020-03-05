import { SET_PRODUCTS_IDS, FILTER_PRODUCTS_IDS } from './favoritsActions';

const initialState = {
  productIds: [],
  isFetching: true,
  updatingAdd: null
};

export const favoritsReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS_IDS:
      return {
        ...state,
        productIds: [...state.productIds, action.payload]
      };

    case FILTER_PRODUCTS_IDS:
      return {
        ...state,
        productIds: [
          ...state.productIds.filter(item => item !== action.payload)
        ]
      };

    default:
      return state;
  }
};
