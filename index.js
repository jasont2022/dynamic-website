/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import 'react-bootstrap/dist/react-bootstrap.min.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'
import App from './src/components/App'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
)
