const initialState = {
  data: [],
};

const categoriesReducer = (state = initialState, action) => {
  if (action.type === 'CATEGORIES') {
    return {
      ...state,
      data: [...action.categories],
    };
  }

  return state;
};

export default categoriesReducer;
