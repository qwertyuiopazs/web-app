
import {combineReducers} from 'redux'
import tabReducer from  './../reducers/tabReducer'
import categoryReducer from  './../reducers/categoryReducer'
import contentListReducer from  './../reducers/contentListReducer'

const reducers = combineReducers({
  tabReducer,
  categoryReducer,
  contentListReducer
})

export default reducers