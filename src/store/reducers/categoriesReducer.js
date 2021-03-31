const categoriesReducer = (state = [], action) => {
  if (action.type === 'CATEGORIES') {
    return [...action.payload];
  }

  return state;
};

export default categoriesReducer;
