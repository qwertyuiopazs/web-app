import { ORDER_LIST } from '../actions/actionType';

const initState = {
  list: []
};

const getOrderList = (state, action) => {
  if (action.curretPage === 0) {
    return {
      ...state,
      list: action.data.digestlist
    };
  }else{
    let list = action.data.digestlist
    list = state.list.concat(list)

    return {
      ...state,
      list
    };
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case ORDER_LIST:
      return getOrderList(state, action);

    default:
      return state;
  }
};
