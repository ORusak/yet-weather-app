import React from 'react';
import './forecast-block.css'

import ForecastList from './../forecast-list'
import Toolbar from './../toolbar'

export default function BlockForecast () {

  return <div className="Forecast-block">
    BlockForecast
    <Toolbar />
    <ForecastList />
  </div>
};
