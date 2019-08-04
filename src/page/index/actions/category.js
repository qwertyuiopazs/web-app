import axios from 'axios'
import {GET_CATEGORY_DATA} from './actionType';

export const getCategory = () => (dispatch) => {
    axios({
        method: "get",
        url: "/json/head.json"
      }).then(resp => {
        dispatch({
            type: GET_CATEGORY_DATA,
            data: resp.data.data.primary_filter
        });
      });
}