import React from 'react'
import ReactDom from 'react-dom'
import store from './store'
import {Provider} from 'react-redux'
import Router from './Main/router'


ReactDom.render(
  <Provider store={store}>
      <Router />
  </Provider>,
  document.getElementById('root')
)