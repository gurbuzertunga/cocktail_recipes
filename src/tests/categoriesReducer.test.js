import categoriesReducer from '../store/reducers/categoriesReducer';

const initialState = {
  data: [],
};

describe('categoriesReducer', () => {
  it(`returns the action payload (array of categories)
    when passed an action of type "CATEGORIES"`, () => {
    expect(categoriesReducer(state = initialState, action)).toEqual({"data": []});
  });
});