export const filterRecipes = category => ({
  type: 'FILTER',
  category,
});

export const getCategories = categories => ({
  type: 'CATEGORIES',
  categories,
});

export const getRecipe = id => ({
  type: 'RECIPE',
  id,
});

export const fetchSuccess = data => ({
  type: 'RECIPE_FETCH_SUCCESS',
  cocktails: data.drinks,
});

export const fetchFailure = () => ({
  type: 'RECIPE_FETCH_FAILURE',
});

export default filterRecipes;
