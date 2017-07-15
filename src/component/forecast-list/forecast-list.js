import React from 'react';
import map from 'lodash/map'

import './forecast-list.css'
import Forecast from './../forecast'

export default function ListForecast () {
  const forecasts = [1]

  return <ol className="Forecast-list">
    {map(forecasts, item => <Forecast key="item"/>)}
  </ol>
};
