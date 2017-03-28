import React, {PropTypes} from 'react'

class Map extends React.Component{

  render () {
    return (<div ref="map_canvas" style={{"height" : "100%", "width": "100%"}}></div>)
  }

  componentDidMount() {
    let mapCanvas = this.refs.map_canvas

    let initLat = this.props.initLat
    let initLon = this.props.initLon

    let mapOptions = {
          zoom: 10,
          center: new google.maps.LatLng(initLat, initLon),
          mapTypeId: this.props.mapType
      }

    this.map = new google.maps.Map(mapCanvas, mapOptions)

    this.updateMap()
  }

  componentDidUpdate(){
    this.updateMap()
  }

  updateMap(){
    this.addGeoJSONDataMarkers()
  }

  addCircle(radius,strokeColor,fillColor,lat,lon){
    var cityCircle = new google.maps.Circle({
      strokeColor: strokeColor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: fillColor,
      fillOpacity: 0.35,
      map: this.map,
      center: new google.maps.LatLng(lat, lon),
      radius: radius
    });
  }

  addMarker(latitude,longitude){
    var latLon = new google.maps.LatLng(latitude, longitude)

    var marker = new google.maps.Marker({
      position: latLon,
      map: this.map
    })

    return marker
  }

  addGeoJSONDataMarkers(){
    let features = this.props.features
    for (var i = 0; i < features.length; i++){
      let feature = features[i]
      let featureData = feature.properties
      let geometry = feature.geometry
      let coords = geometry.coordinates
      let lat = coords[0]
      let lon = coords[1]

      let newMarker = this.addMarker(lat,lon)

      newMarker.addListener('click', function(){
        var infowindow = new google.maps.InfoWindow({
          content: JSON.stringify(featureData)
        })

        infowindow.open(newMarker.map, newMarker)
      })
    }
  }

  addHeatMapLayer(){
    let heatmap = new google.maps.visualization.HeatmapLayer({
      data: this.props.heatMapData
    })
    heatmap.setMap(this.map)
  }
}


export default Map
