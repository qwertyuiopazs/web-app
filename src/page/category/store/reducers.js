
import {combineReducers} from 'redux'
import headerReducer from  '../reducers/headerReducer'
import contentListReducer from  '../reducers/contentReducer'

const reducers = combineReducers({
  headerReducer,
  contentListReducer
})
export default reducers