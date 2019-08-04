import { GET_CONTENT_LIST } from "../actions/actionType";

const initState = {
  contentList: [],
  poilist: []
};

const getContentList = (state, action) => {
  if(action.currentPage===0) {
    // 第一页数据
    return {
      ...state,
      contentList: action.data,
      poilist: action.data.poilist
    }
  }else {
    let poilist = state.poilist
    poilist = poilist.concat(action.data.poilist)
    window.console.log(action.data.poilist)

    return {
      ...state,
      contentList: action.data,
      poilist
    }
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
