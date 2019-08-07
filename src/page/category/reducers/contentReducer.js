import { GET_LIST_DATA } from "../actions/actionTypes";

const initState = {
  poilist: [],
  filterData: null,
  page: 0,
  isEnd: false
};

const getContentList = (state, action) => {
  // window.console.log(action.obj.poilist)

  let _poilist = [];
  let _filterData = action.filterData || state.filterData
  let _page = action.toFirstPage ? 0 : state.page
  let _isEnd = false;

  if(_page===0) {
    // 第一页数据
    _poilist = action.obj.poilist
  }else {
    _poilist = state.poilist.concat(action.obj.poilist)
  }
  _page += 1;
  if( _page > 3 ) {
    _isEnd = true
  }

  return{
    ...state,
    poilist: _poilist,
    filterData: _filterData,
    page: _page,
    isEnd: _isEnd
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_LIST_DATA:
      return getContentList(state, action);

    default:
      return state;
  }
};
