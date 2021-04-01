const initialState = {
  filter: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER':
      return {
        ...state,
        filter: action.category,
      };
    default:
      return state;
  }
};

export default filterReducer;
