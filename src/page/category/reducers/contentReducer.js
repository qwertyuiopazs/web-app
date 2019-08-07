import {GET_LIST_DATA} from '../actions/actionTypes'

const initState = {
  poilist: [],
  currentPage: 0
}

const contentListData = (state, action) => {
  window.console.log(action)
  return {
    ...state,
    poilist: action.data.poilist
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