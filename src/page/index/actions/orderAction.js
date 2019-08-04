import axios from 'axios'
import {ORDER_LIST} from './actionType';

export const getOrderListAction = (curretPage) => (dispatch) => {
    axios({
        method: "get",
        url: "/json/orders.json"
      }).then(resp => {
        dispatch({
            type: ORDER_LIST,
            curretPage,
            data: resp.data.data
        });
      });
}