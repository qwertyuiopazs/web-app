
import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import tabReducer from  './../reducers/tabReducer'
import categoryReducer from  './../reducers/categoryReducer'
import contentListReducer from  './../reducers/contentListReducer'
import orderReducer from  './../reducers/orderReducer'

const reducers = combineReducers({
  tabReducer,
  categoryReducer,
  contentListReducer,
  orderReducer,
  router: routerReducer
})

export default reducers