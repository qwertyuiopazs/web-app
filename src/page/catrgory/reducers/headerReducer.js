import { TABKEY } from '../config'
import {CHANGE_TAB} from '../actions/actionTypes'
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
  activeKey: TABKEY.cate
}

export default (state=initState, action) => {

  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        activeKey: action.key
      }
  
    default:
      return state;
  }
}