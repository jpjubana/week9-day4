import React from 'react';
import EarthquakeList from './EarthquakeList';
import '../styles/App.css';

export default class App extends React.Component {
  render() {
    // const 
    return (
        <div className='title'>
          <div className='my-header'>
            Earthquakes!
          </div>
          <div className='earthquake-title'>
              <h1>This is a list of 8 Earthquakes occurring on the morning of July 14th across the United States.</h1>
          </div>
            <EarthquakeList />
        </div>
    );
  }
}