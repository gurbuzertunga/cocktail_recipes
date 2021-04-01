import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import filterReducer from './filterReducer';
import recipesReducer from './recipesReducer';
import urlReducer from './urlReducer';

const rootReducer = combineReducers({
  recipesReducer,
  categoriesReducer,
  filterReducer,
  urlReducer,
});

export default rootReducer;
