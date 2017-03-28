import React, {PropTypes} from 'react'

export default class MapControls extends React.Component{
  render(){
    return (
      <div className="mapControlPane">
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
