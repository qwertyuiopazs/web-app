import {createStore, applyMiddleware} from 'redux'
import mainReducer from './reducers'
import thunk from 'redux-thunk'

if(module.hot) {
    module.hot.accept('./reducers', ()=>{
        const nextRootReducer = require('./reducers').default;
        store.replaceReducer(nextRootReducer)
    })
}
const store = createStore(mainReducer, applyMiddleware(thunk))

export default store