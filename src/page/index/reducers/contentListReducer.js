import { GET_CONTENT_LIST } from "../actions/actionType";

const initState = {
  contentList: []
};

const getContentList = (state, action) => {
    return {
        ...state,
        contentList: action.data
    }
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_CONTENT_LIST:
      return getContentList(state, action);

    default:
      return state;
  }
};
