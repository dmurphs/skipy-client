import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchLocations } from '../actions'
import MapControls from '../components/MapControls'

class App extends Component {
  componentDidMount() {
    const {dispatch, locations} = this.props
    dispatch(fetchLocations())
  }

  render(){
    let {locations} = this.props
    return (
      <h1>Some stuff</h1>
    )
  }
}

App.propTypes = {
  locations: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  const { locations } = state

  return {
    locations
  }
}

export default connect(mapStateToProps)(App)
