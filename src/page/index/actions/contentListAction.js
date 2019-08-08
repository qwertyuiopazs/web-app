import axios from 'axios'
import {GET_CONTENT_LIST} from './actionType';
import {READY_LOAD} from 'components/ScrollView/actions'

export const getContentListAction = (page) => (dispatch) => {
  dispatch({
    type: READY_LOAD,
    obj: false
  })
    axios({
        method: "get",
        url: "/json/list.json"
      }).then(resp => {
        dispatch({
            type: GET_CONTENT_LIST,
            currentPage: page,
            data: resp.data.data
        });
        dispatch({
          type: READY_LOAD,
          obj: true
        })
      });
}