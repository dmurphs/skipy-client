import React from 'react';
import {render} from 'react-dom';

import Map from './components/Map'

class App extends React.Component {
  render () {
    return <Map initLat='46.8764708' initLon='-114.1582527'/>;
  }
}

render(<App/>, document.getElementById('app'));
