import { initializeApp } from 'firebase/app'
import firebaseConfig from 'Services/firebaseService/firebaseConfig'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './Redux/Store'

import Routes from 'Routes/Routes'
import './index.css'
// import reportWebVitals from './reportWebVitals'

const render = () => {
  // Initialize Firebase
  initializeApp(firebaseConfig)
  return ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
      <React.StrictMode>
        <Routes />
      </React.StrictMode>
    </Provider>
  )
}
render()
