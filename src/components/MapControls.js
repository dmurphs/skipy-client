import React, {PropTypes} from 'react'

export default class MapControls extends React.Component{
  render(){
    return (
      <div className="mapControlPane">
        <select multiple>
          {this.props.locations.map((location,i) =>
            <option value={location.location_id}>{location.site_name}, {location.state}</option>
          )}
        </select>
        <select>
          {this.props.years.map((year,i) =>
            <option value={year}>{year}</option>
          )}
        </select>
      </div>
    );
  }
}
