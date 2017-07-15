import React from 'react';
import map from 'lodash/map'

import './forecast.css'

const Forecast = ({name, weather, features}) => (
  <li className="Forecast">
    <article className="list-item">
      <h3 className="list-item-title">
        <span className="list-item-name">{name}</span>,
        <span className="list-item-weather">{weather}</span>
      </h3>
      <div className="list-item-features">
        {map(features, feature => <span className="list-item-feature" key={feature}>{feature}</span>)}
      </div>
    </article>
  </li>
)

export default Forecast
