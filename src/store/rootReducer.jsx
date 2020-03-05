import { combineReducers } from 'redux';
import { cartReducer } from './cart/cartReducer';
import { doNotMissReducer } from './doNotMiss/doNotMissReducer';
import { mostPopularReducer } from './mostPopular/mostPopularReducer';
import { recommendedReducer } from './recommended/recommendedReducer';
import { filterReducer } from './filter/filterReducer';
import { favoritsReducers } from './favorits/favoritsReducers';

const rootReducer = combineReducers({
  cartReducer,
  doNotMissReducer,
  mostPopularReducer,
  recommendedReducer,
  filterReducer,
  favoritsReducers
});

export default rootReducer;
