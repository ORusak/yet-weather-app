import React from 'react';
import map from 'lodash/map'

import './forecast-list.css'
import Forecast from './../forecast'

const ListForecast = ({ list, onDragAndDrop }) => (
  <ol className="Forecast-list">
    {
      list.length === 0 ? <Forecast key="add"
                                    draggble={false}
                                    name="Перетащите сюда регион"
                                    id="add"
                                    onDragAndDrop={onDragAndDrop}/>:''
    }
    {
      map(list, item => (<Forecast key={item.id} {...item} onDragAndDrop={onDragAndDrop}/>))
    }
  </ol>
)

export default ListForecast
