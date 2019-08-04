import React from 'react'
import ReactDom from 'react-dom'
import store from './store'
import {Provider} from 'react-redux'
import Container from './Main/Container'

ReactDom.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
)