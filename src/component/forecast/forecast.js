import React from 'react';
import './forecast.css'

export default function Forecast () {

  return <li className="Forecast">
    <article className="list-item">
      <h3 className="list-item-title">
        <span className="list-item-name">Иваново</span>,
        <span className="list-item-weather">+23ºC</span>
      </h3>
      <div className="list-item-features">
        <span className="list-item-feature">☀</span>
        <span className="list-item-feature"></span>
      </div>
    </article>
  </li>
};
