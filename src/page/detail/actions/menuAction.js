import {GET_LEFTBAR_LIST, LEFT_CLICK, ADD_SECLECT_ITEM, MINUS_SECLECT_ITEM, SHOW_CHOOSE, CLEAR_CHOOSE} from './actionTypes'
import axios from 'axios'

export const getLeftBarList = () => async (dispatch)=>{
  let result = await axios({
    method: "get",
    url: "/json/food.json"
  });
  dispatch({
    type: GET_LEFTBAR_LIST,
    obj: result.data.data
  });
}

export const itemClick = (obj) => {
  return ({
    type: LEFT_CLICK,
    obj
  });
}

export const addSelectedItem = (obj) => {
  return ({
    type: ADD_SECLECT_ITEM,
    obj
  });
}
export const minusSelectedItem = (obj) => {
  return ({
    type: MINUS_SECLECT_ITEM,
    obj
  });
}

export const showChoose = (obj) => {
  return ({
    type: SHOW_CHOOSE,
    obj
  });
}

export const clearChoose = () => {
  return ({
    type: CLEAR_CHOOSE
  });
}