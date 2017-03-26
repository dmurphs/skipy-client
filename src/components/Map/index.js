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
          mapTypeId: 'terrain'
      }

    this.map = new google.maps.Map(mapCanvas, mapOptions)

    let marker = this.addMarker(initLat,initLon)

    this.addInfoWindow("Hello World", marker)
  }

  addMarker(latitude,longitude){
    var latLon = new google.maps.LatLng(latitude, longitude)

    var marker = new google.maps.Marker({
      position: latLon,
      map: this.map,
      title: 'Hello World!'
    })

    return marker
  }

  addInfoWindow(content, marker){
    var infowindow = new google.maps.InfoWindow({
      content: content
    })

    infowindow.open(this.map, marker)
  }
}


export default Map
