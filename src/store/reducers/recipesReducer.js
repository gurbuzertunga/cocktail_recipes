const initialState = {
  data: {},
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECIPE_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'RECIPE_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        recipes: action.cocktails,
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
