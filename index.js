/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line import/extensions
import 'react-bootstrap/dist/react-bootstrap.min.js'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import rootReducer from './reducers'
import App from './src/components/App'
// eslint-disable-next-line import/extensions

// const store = createStore(rootReducer)

// eslint-disable-next-line react/jsx-tag-spacing
ReactDOM.render(<App />, document.getElementById('react-root'))
// <Provider store={store}>
// </Provider>,
