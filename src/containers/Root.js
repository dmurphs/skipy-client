import React, { Component, PropTypes } from 'react'
import { connect, Provider } from 'react-redux'

import configureStore from '../configureStore'
import App from './App'

const initialState = {
  monthlySnowData: {
    data: []
  }
}

const store = configureStore(initialState)

export default class Root extends Component{
  render(){
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
