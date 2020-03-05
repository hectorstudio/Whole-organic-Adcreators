import { SET_MOST_POPULAR_DATA } from './mostPopularActions';

const initialState = {
  mostPopularTitle: 'Most popular',
  mostPopularData: []
};

export const mostPopularReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOST_POPULAR_DATA:
      return {
        ...state,
        mostPopularData: [...action.payload]
      };

    default:
      return state;
  }
};
