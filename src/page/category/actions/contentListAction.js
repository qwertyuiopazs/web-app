import axios from 'axios'
import {GET_LIST_DATA} from './actionTypes';

export const getContentListAction = (page) => (dispatch) => {
    axios({
        method: "get",
        params: {
            page
        },
        url: "/json/list.json"
      }).then(resp => {
        dispatch({
            type: GET_LIST_DATA,
            data: resp.data.data
        });
      });
}