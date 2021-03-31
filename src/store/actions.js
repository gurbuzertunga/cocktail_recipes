export const filterRecipes = category => ({
  type: 'FILTER',
  payload: category,
});

export const getCategories = categories => ({
  type: 'CATEGORIES',
  payload: categories,
});

export const getRecipe = id => ({
  type: 'RECIPE',
  payload: id,
});

export const fetchInıt = () => ({
  type: 'RECIPE_FETCH_INIT',
});

export const fetchSuccess = data => ({
  type: 'RECIPE_FETCH_SUCCESS',
  payload: data.cocktails,
});

export const fetchFailure = () => ({
  type: 'RECIPE_FETCH_FAILURE',
});

export default filterRecipes;
