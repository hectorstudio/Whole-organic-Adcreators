import { SET_RECOMMENDED_DATA } from './recommendedActions';

const initialState = {
  recommendedTitle: 'Recommended for you',
  recommendedData: []
};

export const recommendedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECOMMENDED_DATA:
      return {
        ...state,
        recommendedData: [...action.payload]
      };

    default:
      return state;
  }
};
