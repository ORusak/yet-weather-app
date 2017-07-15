import React from 'react';
import map from 'lodash/map'

import './forecast-list.css'
import Forecast from './../forecast'

const ListForecast = ({ list }) => (
  <ol className="Forecast-list">
    {
      map(list, item => {
        console.log(item)
        return (<Forecast key={item.id} {...item}/>)
      })
    }
  </ol>
)

export default ListForecast
