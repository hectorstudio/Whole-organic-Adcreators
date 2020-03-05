export const SET_MOST_POPULAR_DATA = 'SET_MOST_POPULAR_DATA';

export const setMostPopularData = arr => {
  return {
    type: SET_MOST_POPULAR_DATA,
    payload: arr
  };
};
