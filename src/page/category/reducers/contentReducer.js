import {GET_LIST_DATA} from '../actions/actionTypes'

const initState = {
    contentList: [],
    currentPage: 0
}

const contentListData = (state, action) => {
  window.console.log(action)
  return {
    ...state,
    contentList: action.data
  }
}

export default (state=initState, action) => {
  switch (action.type) {
    case GET_LIST_DATA:
      return contentListData(state, action)

    default:
      return state;
  }
}