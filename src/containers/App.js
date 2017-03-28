import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchMonthlySnowData } from '../actions'
import MapControls from '../components/MapControls'
import Map from '../components/Map'

class App extends Component {
  componentDidMount() {
    const {dispatch, monthlySnowData} = this.props

    dispatch(fetchMonthlySnowData(1999,'01'))
  }

  render(){
    const startYear = 1930

    var today = new Date();
    var endYear = today.getFullYear() + 1;

    const yearRange = Array.from({length: (endYear - startYear)}, (v, k) => k + startYear);

    let { monthlySnowData } = this.props
    let monthlySnowDataItems = monthlySnowData.data

    let filteredData = this.filterData(monthlySnowDataItems)

    let geoFeatures = this.mapMonthlySnowItems(filteredData, this.mapItemToFeature)

    return (
      <div ref="map-app">
        <MapControls years={yearRange} />
        <Map
          initLat={46.875015}
          initLon={-113.999041}
          mapType="terrain"
          features={geoFeatures}
        />
      </div>
    )
  }

  filterData(data){
    let mostRecentMonthValues = this.getMostRecentMonthValues(data)
    return this.filterNullSnowDepthItems(mostRecentMonthValues)
  }

  getMostRecentMonthValues(data){
    //Sort by date
    let dataSortedByDate = data.sort(function(a,b){
      let aDate = Date.parse(a.collection_date)
      let bDate = Date.parse(b.collection_date)

      if (aDate > bDate){
        return 1
      }
      else if (aDate < bDate){
        return -1
      }
      else{
        return 0
      }
    })

    let filteredDataLookup = []
    for (var i in dataSortedByDate){
      let item = dataSortedByDate[i]
      let stationID = item.location.station
      filteredDataLookup[stationID] = item
    }

    return Object.keys(filteredDataLookup).map(function(stationID){return filteredDataLookup[stationID]})
  }

  // filter out monthly snow data items where snow depth is null
  filterNullSnowDepthItems(data){
    function hasNonNullSnowDepth(item){
      return item.snow_depth != null
    }

    return data.filter(hasNonNullSnowDepth)
  }

  // map data array with a specified formatting method
  mapMonthlySnowItems(monthlySnowDataItems, formattingMethod){
    return monthlySnowDataItems.map(function(dataItem){return formattingMethod(dataItem)})
  }

  // get an array of data for the heatmaps feature in google maps api
  mapItemToHeatmap(item){
    let location = item.location
    let snowDepth = item.snow_depth
    return {
      location: new google.maps.LatLng(location.lat, location.lon),
      weight: snowDepth
    }
  }

  // map data item to geoJSON feature
  mapItemToFeature(item){
    let location = item.location

    return {
      type: "Feature",
      geometry: {"type": "Point", "coordinates": [location.lat, location.lon]},
      properties: {
        siteName: location.site_name,
        elevation: location.elev,
        county: location.county,
        state: location.state,
        collection_date: item.collection_date,
        snowDepth: item.snow_depth,
        snowWaterEquivalent: item.snow_water_equivalent
      }
    }
  }
}

App.propTypes = {
  monthlySnowData: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const { locations, monthlySnowData } = state

  return {
    monthlySnowData
  }
}

export default connect(mapStateToProps)(App)
