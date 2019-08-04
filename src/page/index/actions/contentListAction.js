import axios from 'axios'
import {GET_CONTENT_LIST} from './actionType';

export const getContentListAction = (page) => (dispatch) => {
    axios({
        method: "get",
        url: "/json/list.json"
      }).then(resp => {
        dispatch({
            type: GET_CONTENT_LIST,
            currentPage: page,
            data: resp.data.data
        });
      });
}