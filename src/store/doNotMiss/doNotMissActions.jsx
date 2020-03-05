export const SET_DO_NOT_MISS_DATA = 'SET_DO_NOT_MISS_DATA';

export const setDoNotMissData = arr => {
  return {
    type: SET_DO_NOT_MISS_DATA,
    payload: arr
  };
};
