import { GET_CATEGORY_DATA } from "../actions/actionType";

const initState = {
  categoryList: []
};

const getGategory = (state, action) => {
    return {
        ...state,
        categoryList: action.data
    }
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_CATEGORY_DATA:
      return getGategory(state, action);

    default:
      return state;
  }
};
