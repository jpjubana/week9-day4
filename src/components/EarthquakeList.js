import React from 'react';
import earthquakes from '../data/earthquakes';
import EarthquakeInfo from './EarthquakeInfo';
import '../styles/App.css'

export default class EarthquakeList extends React.Component {
    render() {
        const quake = earthquakes.features;
        return (
            <div className="quake-list">
                {quake.map((quake, index) =>
                    <EarthquakeInfo key={index} quake={quake} />
                )}
            </div>
        )
    }
}