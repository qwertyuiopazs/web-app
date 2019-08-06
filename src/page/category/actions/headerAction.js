import { CHANGE_TAB, FETCH_DATA, CHANG_FILTER } from "./actionTypes";
import axios from "axios";

export const changTab = (obj) =>({
    type: CHANGE_TAB,
    obj
  });

export const getFilterData = () => async (dispatch) => {
  let resp = await axios({
    url: '/json/filter.json',
    method: 'get'
  })
  dispatch({
    type: FETCH_DATA,
    data:resp.data.data
  })

};

export const changFilter = (obj) => (dispatch) => {
  dispatch({
    type: CHANG_FILTER,
    obj
  })

  dispatch({
    type: CHANGE_TAB,
    obj:  {
      closePanel: true
    }
  })
}