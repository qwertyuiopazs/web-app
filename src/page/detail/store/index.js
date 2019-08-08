import {createStore, applyMiddleware} from 'redux'
import mainReducer from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);

if(module.hot) {
    module.hot.accept('./reducers', ()=>{
        const nextRootReducer = require('./reducers').default;
        store.replaceReducer(nextRootReducer)
    })
}
const store = createStore(mainReducer, enhancer)

export default store