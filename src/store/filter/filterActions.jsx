export const SET_FILTER_DATA = 'SET_FILTER_DATA';
/*export const SET_SUBCATEGORY = 'GET_SUBCATEGORY';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';*/

export const setFilterData = (category, subcategory, searchText) => {
  return {
    type: SET_FILTER_DATA,
    payload: {
      category,
      subcategory,
      searchText
    }
  };
};
/*

export const setSubCategory = (arr) => {
  return {
    type: SET_SUBCATEGORY,
    payload: arr
  };
};

export const setSearchText = (str) => {
  return {
    type: SET_SEARCH_TEXT,
    payload: str
  };
};*/
