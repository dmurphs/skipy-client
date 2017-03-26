import React, {PropTypes} from 'react'

export default class MapControls extends React.Component{
  render(){
    return (
      <div className="mapControlPane">
        <select multiple>
          {this.props.locations.locationNames.map((location) =>
            <option key={location.location_id} value={location.location_id}>{location.site_name}, {location.state}</option>
          )}
        </select>
        <select>
          {this.props.years.map((year) =>
            <option key={year} value={year}>{year}</option>
          )}
        </select>
        <button>Submit</button>
      </div>
    );
  }
}
