import React, { Component, PropTypes } from 'react'
import { connect, Provider } from 'react-redux'

import configureStore from '../configureStore'
import App from './App'

const store = configureStore({locations: {locationNames: []}})

export default class Root extends Component{
  render(){
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
