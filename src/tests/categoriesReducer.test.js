import { getCategories } from '../store/actions';
import categoriesReducer from '../store/reducers/categoriesReducer';

const initialState = {
  data: [],
};

describe('categoriesReducer', () => {
  it(`returns the action payload (array of categories)
    when passed an action of type "CATEGORIES"`, () => {
    expect(categoriesReducer(initialState,  getCategories([]))).toEqual({"data": []});
  });

  it('returns the state if the action is not "CATEGORIES"', () => {
    expect(categoriesReducer('STATE', { type: 'OTHER' })).toEqual('STATE');
  });

  it('returns an empty array if state is undefined and the action is not "CATEGORIES"', () => {
    expect(categoriesReducer(undefined, { type: 'OTHER' })).toEqual({"data": []});
  });

});