
import {combineReducers} from 'redux'
import tabReducer from  '../reducers/tabReducer'
import menuReducer from  '../reducers/menuReducer'

const reducers = combineReducers({
  tabReducer,
  menuReducer
})

export default reducers