import React from 'react';
import './forecast-block.css'

import ForecastList from './../forecast-list'
import Toolbar from './../toolbar'

const BlockForecast = ({ list, sort, filters, onChangeOrder, onFilterByText, onFilterByFeatures }) => (
  <div className="Forecast-block">
    BlockForecast
    <Toolbar sort={sort} {...filters}
             onChangeOrder={onChangeOrder}
             onFilterByText={onFilterByText}
             onFilterByFeatures={onFilterByFeatures}/>
    <ForecastList list={list} />
  </div>
)

export default BlockForecast
