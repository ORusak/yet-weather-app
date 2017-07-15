import React from 'react';
import './forecast-page.css'

import VisibleForecastBlock from './../../containers/visible-forecast-block'
import VisibleForecastFavouriteBlock from './../../containers/visible-forecast-favourite-block'
import MapBox from './../map-box'

const ForecastPage = () => (
  <div className="Forecast-page">
    <VisibleForecastBlock />
    <VisibleForecastFavouriteBlock />
    <MapBox />
  </div>
)

export default ForecastPage
