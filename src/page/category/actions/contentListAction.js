import axios from "axios";
import { GET_LIST_DATA } from "./actionTypes";

export const getContentListAction = obj => async (dispatch, getState) => {
  // 判断是哪里来的请求(Header 过来的action有 filterData)
  // getState()获取所有数据
  let url = "/json/list.json";
  if (obj.filterData || getState().contentListReducer.filterData) {
    url = "/json/listparams.json";
  }
  let result = await axios({
    method: "get",
    url
  });
  dispatch({
    type: GET_LIST_DATA,
    filterData: obj.filterData,
    toFirstPage: obj.toFirstPage,
    obj: result.data.data
  });
};
