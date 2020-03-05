import { SET_FILTER_DATA } from './filterActions';

const initialState = {
  categories: {},
  subCategory: {},
  searchText: ''
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_DATA:
      return {
        ...state,
        categories: { ...action.payload.category },
        subCategory: { ...action.payload.subcategory },
        searchText: action.payload.searchText
      };

    default:
      return state;
  }
};
