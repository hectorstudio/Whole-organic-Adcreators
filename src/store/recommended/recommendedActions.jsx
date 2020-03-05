export const SET_RECOMMENDED_DATA = 'SET_RECOMMENDED_DATA';

export const setRecommendedData = arr => {
  return {
    type: SET_RECOMMENDED_DATA,
    payload: arr
  };
};
