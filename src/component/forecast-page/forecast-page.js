import React from 'react';
import './forecast-page.css'

import ForecastBlock from './../forecast-block'
import MapBox from './../map-box'

export default function ForecastPage () {

  return <div className="Forecast-page">
    <ForecastBlock />
    <ForecastBlock />
    <MapBox />
  </div>
};
