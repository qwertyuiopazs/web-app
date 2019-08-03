import { TABKEY } from '../config/index';
import {SWITCH_TABS} from '../actions/actionType'

const initState = {
  tabs: [
    {name: '首页', key: TABKEY.home},
    {name: '订单', key: TABKEY.order},
    {name: '我的', key: TABKEY.mine},
  ],
  activeKey: TABKEY.home
};

const switchTabs = (state, action) => {
  return {
    ...state,
    activeKey: action.key
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case SWITCH_TABS: 
      return switchTabs(state, action)

    default:
      return state;
  }
};
