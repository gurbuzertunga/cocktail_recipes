import {
  fetchFailure,
  fetchSuccess,
} from '../store/actions';
import recipesReducer from '../store/reducers/recipesReducer';

describe('recipesReducer', () => {
  const state = {
    cocktails: [],
    isLoading: false,
    isError: false,
  };

  describe('Action type is RECIPE_FETCH_SUCCESS', () => {
    it('returns a new recipes array, setting isLoading to false, and isError to false', () => {
      expect(recipesReducer(state, fetchSuccess({ cocktails: ['item', 'other item'] }))).toEqual({
        cocktails: undefined,
        isLoading: false,
        isError: false,
      });
    });
  });

  describe('Action type is RECIPE_FETCH_FAILURE', () => {
    it('returns the current state, setting isLoading to false, and isError to true', () => {
      expect(recipesReducer(state, fetchFailure())).toEqual({
        cocktails: [],
        isLoading: false,
        isError: true,
      });
    });
  });

  it('returns current state if the action type is not one expected', () => {
    expect(recipesReducer(state, { type: 'OTHER' })).toEqual({
      cocktails: [],
      isLoading: false,
      isError: false,
    });
  });

  it(`returns initial state if it us undefined
  and the action type is not one expected`, () => {
    expect(recipesReducer(undefined, { type: 'OTHER' })).toEqual({
         "cocktails": [],
         "isError": false,
         "isLoading": true,
       });
  });

});