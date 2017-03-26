import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchLocations } from '../actions'
import MapControls from '../components/MapControls'
import Map from '../components/Map'

class App extends Component {
  componentDidMount() {
    const {dispatch, locations} = this.props
    dispatch(fetchLocations())
  }

  render(){
    const startYear = 1930

    var today = new Date();
    var endYear = today.getFullYear() + 1;

    const yearRange = Array.from({length: (endYear - startYear)}, (v, k) => k + startYear);

    let {locations} = this.props

    return (
      <div ref="app">
        <MapControls locations={locations} years={yearRange} />
        <Map initLat={46.875015} initLon={-113.999041} />
      </div>
    )
  }
}

App.propTypes = {
  locations: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const { locations } = state

  return {
    locations
  }
}

export default connect(mapStateToProps)(App)
