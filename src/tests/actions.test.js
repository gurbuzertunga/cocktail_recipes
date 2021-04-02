import {
  filterRecipes,
  getCategories,
  getRecipe,
  fetchSuccess,
  fetchFailure,
} from '../store/actions';

describe('State actions', () => {
  describe('filterRecipes', () => {
    const payload = 'Shot';
    it('returns an object with type "FILTER"', () => {
      expect(filterRecipes(payload).type).toEqual('FILTER');
    });
    it('returns an object with payload equal to the passed category', () => {
      expect(filterRecipes(payload).category).toEqual('Shot');
    });

    it('returns an object with payload and type properties', () => {
      expect(filterRecipes(payload)).toEqual({ type: 'FILTER', category: 'Shot' });
    });
  });

  describe('getCategories', () => {
    const payload = ['Cocktail', 'Shot'];
    it('returns an object with type "CATEGORIES"', () => {
      expect(getCategories(payload).type).toEqual('CATEGORIES');
    });

    it('returns an object with payload equal to a passed array of categories', () => {
      expect(getCategories(payload).categories).toEqual(['Cocktail', 'Shot']);
    });

    it('returns an object with payload and type properties', () => {
      expect(getCategories(payload)).toEqual({ type: 'CATEGORIES', categories: ['Cocktail', 'Shot'] });
    });
  });

  describe('getRecipe', () => {
    const payload = 13162;
    it('returns an object with type "RECIPE"', () => {
      expect(getRecipe(payload).type).toEqual('RECIPE');
    });

    it('returns an object with payload equal to a passed recipe ID', () => {
      expect(getRecipe(payload).id).toEqual(13162);
    });

    it('returns an object with payload and type properties', () => {
      expect(getRecipe(payload)).toEqual({ type: 'RECIPE', id: 13162 });
    });
  });

  describe('fetchSuccess', () => {
    const data = { cocktails: [] };
    it('returns an object with type "RECIPE_FETCH_SUCCESS"', () => {
      expect(fetchSuccess(data).type).toEqual('RECIPE_FETCH_SUCCESS');
    });
  });

  describe('fetchFailure', () => {
    it('returns an object with type "RECIPE_FETCH_FAILURE"', () => {
      expect(fetchFailure().type).toEqual('RECIPE_FETCH_FAILURE');
    });
  });

});