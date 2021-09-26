import { initializeApp } from 'firebase/app'
import firebaseConfig from 'Services/firebaseService/firebaseConfig'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './Redux/Store'

import Routes from 'Routes/Routes'
import './index.css'
// import reportWebVitals from './reportWebVitals'

const render = () => {
  // Initialize Firebase
  initializeApp(firebaseConfig)
  return ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <Routes />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  )
}
render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals()
