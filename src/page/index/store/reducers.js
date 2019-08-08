
import {combineReducers} from 'redux'
import tabReducer from  './../reducers/tabReducer'
import categoryReducer from  './../reducers/categoryReducer'
import contentListReducer from  './../reducers/contentListReducer'
import orderReducer from  './../reducers/orderReducer'
import ScrollViewReducer from  'components/ScrollView/ScrollViewReducer'

const reducers = combineReducers({
  tabReducer,
  categoryReducer,
  contentListReducer,
  orderReducer,
  ScrollViewReducer
})

export default reducers