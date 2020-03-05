import { SET_DO_NOT_MISS_DATA } from './doNotMissActions';

const initialState = {
  doNotMissTitle: 'Do not miss',
  doNotMissData: []
};

export const doNotMissReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DO_NOT_MISS_DATA:
      return {
        ...state,
        doNotMissData: [...action.payload]
      };

    default:
      return state;
  }
};
