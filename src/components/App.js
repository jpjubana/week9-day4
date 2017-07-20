import React from 'react';
import EarthquakeList from './EarthquakeList'
import EarthquakeInfo from './EarthquakeInfo';
import '../styles/App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='title'>
          <div className='my-header'>
            'Earthquakes!'
            <EarthquakeInfo />
            <EarthquakeList />
          </div>
        </div>
      </div>
    );
  }
}