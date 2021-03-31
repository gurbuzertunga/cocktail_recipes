import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import filterReducer from './filterReducer';
import recipesReducer from './recipesReducer';
import urlReducer from './urlReducer';

const rootReducer = combineReducers({
  data: recipesReducer,
  categories: categoriesReducer,
  filter: filterReducer,
  url: urlReducer,
});

export default rootReducer;
