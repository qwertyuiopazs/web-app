import { TABKEY } from '../config'
import {CHANGE_TAB, FETCH_DATA, CHANG_FILTER} from '../actions/actionTypes'
let tabs = {}

tabs[TABKEY.cate] = {
  key: TABKEY.cate,
  text: '全部分类',
  obj: {}
}
tabs[TABKEY.type] = {
  key: TABKEY.type,
  text: '综合排序',
  obj: {}
}
tabs[TABKEY.filter] = {
  key: TABKEY.filter,
  text: '筛选',
  obj: {}
}

const initState = {
  tabs,
  activeKey: TABKEY.cate,
  filterData: {},
  closePanel: true
}

// 头部数据
const fetchData = (state, action) => {
  window.console.log(action.data)
  return {
    ...state,
    filterData: action.data
  }
}

const changFilter = (state, action) => {
  let _tabs = JSON.parse(JSON.stringify(state.tabs))
  _tabs[action.obj.key] = {
    key: action.obj.key,
    text: action.obj.item.name,
    obj: action.obj.item
  }

  return {
    ...state,
    tabs: _tabs
  }
}

export default (state=initState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        ...action.obj
      }
    case FETCH_DATA:
      return fetchData(state, action)

    case CHANG_FILTER:
      return changFilter(state, action) 

    default:
      return state;
  }
}