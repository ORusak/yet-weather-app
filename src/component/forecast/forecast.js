import React from 'react'
import map from 'lodash/map'

import './forecast.css'

const Forecast = ({name, weather, features, id, onDragAndDrop, draggble = true}) => (
  <li className="Forecast" draggable={draggble} id={id}
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDropInit(onDragAndDrop)}
      onDragEnd={handleDragEnd}>
    <article className="list-item">
      <h3 className="list-item-title">
        <span className="list-item-name">{name}</span>{weather ? ',':''}
        <span className="list-item-weather">{weather}</span>
      </h3>
      <div className="list-item-features">
        {map(features, feature => <span className="list-item-feature" key={feature}>{feature}</span>)}
      </div>
    </article>
  </li>
)

let dragSrcEl = null;

function handleDragStart (e) {
  e.target.style.opacity = '0.4'

  dragSrcEl =  e.target;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', e.target.id);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault()
  }

  e.dataTransfer.dropEffect = 'move'  // See the section on the DataTransfer object.

  return false
}

function handleDragEnter(e) {
  e.currentTarget.classList.add('over')
}

//  todo: разобраться со срабатыванием onDragLeave в середине элемента
function handleDragLeave(e) {
  if (e.currentTarget === e.target) {
    e.currentTarget.classList.remove('over')
  }
}

function handleDropInit (onDragAndDropHandler) {

  return function handleDrop (e) {
    if (e.stopPropagation) {
      e.stopPropagation() // stops the browser from redirecting.
    }

    if (dragSrcEl !== e.target) {
      const idSource = e.dataTransfer.getData('text/plain')
      const idTarget = e.currentTarget.id

      onDragAndDropHandler(idSource, idTarget)
    }

    return false
  }
}

function handleDragEnd(e) {
  e.target.style.opacity = '1';

  //  todo: ora: подумать над оптимизацией получения списка
  //  1. обрабатывать событие в родителях и там снимать over
  //  2. привязать получение к componentdidmount
  const forecasts = document.querySelectorAll('#root .Forecast');

  [].forEach.call(forecasts, function (forecast) {
    forecast.classList.remove('over')
  })
}

export default Forecast
