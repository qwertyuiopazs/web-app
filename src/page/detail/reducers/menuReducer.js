import { GET_LEFTBAR_LIST, LEFT_CLICK, ADD_SECLECT_ITEM, MINUS_SECLECT_ITEM, SHOW_CHOOSE, CLEAR_CHOOSE} from '../actions/actionTypes';
const initState = {
  listData: {},
  currentLeftIndex: 0,
  showChooseContent: false
};

const itemClick = (state, action) => {
    return {
        ...state,
        currentLeftIndex: action.obj.currentLeftIndex
    }
}

const addSelectItem = (state, action) => {
  return handleSelectItem(state, action, ADD_SECLECT_ITEM)
}
const minusSelectItem = (state, action) => {
  return handleSelectItem(state, action, MINUS_SECLECT_ITEM)
}

const handleSelectItem = (state, action, type) => {
  let listData = state.listData
  // 获取当前的列表
  let list = listData.food_spu_tags || [];
  // 通过列表,找到左边的类别对应的数据
  window.console.log("outIndex", action.obj.outIndex)
  let currentItem;
  if(action.obj.outIndex===0) {
    currentItem = list[action.obj.outIndex]
  }else{
    currentItem = list[action.obj.outIndex||state.currentLeftIndex]
  }

  // 获取当前点击的那一项，并数量 加一 或 减一
  if(type===ADD_SECLECT_ITEM) {
    currentItem.spus[action.obj.index].chooseCount ++;
  }else{
    currentItem.spus[action.obj.index].chooseCount --;
  }

  let _listData = JSON.parse(JSON.stringify(listData))
  // 更新listData的数据，触发前台更新
  return {
      ...state,
      listData: _listData
  }
}

const showChooseContent = (state, action) => {
  return {
    ...state,
    showChooseContent: action.obj.showChooseContent
  }
}

const clearChoose = (state) => {
  let listData = state.listData
  // 获取当前的列表
  let list = listData.food_spu_tags || [];

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].spus.length; j++) {
      let item = list[i].spus[j]
      if(item.chooseCount) {
        item.chooseCount = 0
      }
    }
  }
  let _listData = JSON.parse(JSON.stringify(listData))
  return {
    ...state,
    listData: _listData
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_LEFTBAR_LIST:
      return {
        ...state,
        listData: action.obj
      };
    case LEFT_CLICK:
      return itemClick(state, action);
    case ADD_SECLECT_ITEM:
      return addSelectItem(state, action);
    case MINUS_SECLECT_ITEM:
      return minusSelectItem(state, action);
    case SHOW_CHOOSE:
      return showChooseContent(state, action);
    case CLEAR_CHOOSE:
      return clearChoose(state, action);
    default:
      return state;
  }
};
