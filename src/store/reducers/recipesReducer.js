const initialState = {
  cocktails: [],
  isLoading: true,
  isError: false,
};

const recipesReducer = (state = initialState, action) => {
  console.log(action.cocktails);
  switch (action.type) {
    case 'RECIPE_FETCH_SUCCESS':
      return {
        ...state,
        cocktails: action.cocktails,
        isLoading: false,
        isError: false,
      };
    case 'RECIPE_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default recipesReducer;
