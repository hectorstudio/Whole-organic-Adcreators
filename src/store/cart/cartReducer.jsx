import { SET_COUNT_VALUE } from './cartActions';

const initialState = {
  count: ''
  /*isFetching: false*/
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNT_VALUE:
      return {
        ...state,
        count: action.payload
      };

    default:
      return state;
  }
};
