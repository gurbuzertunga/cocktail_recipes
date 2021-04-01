import {
  BASE,
  LOOKUP_CAT,
  LOOKUP_ID,
} from '../../services/cocktailsdb';

const initialState = {
  url: '',
};

const urlReducer = (state = initialState, action) => {
  console.log(action.category);
  switch (action.type) {
    case 'FILTER':
      return {
        ...state,
        url: `${BASE}${LOOKUP_CAT}${action.category
        }`,
      };
    case 'RECIPE':
      return {
        ...state,
        url: `${BASE}${LOOKUP_ID}${action.id
        }`,
      };
    default:
      return state;
  }
};

export default urlReducer;
