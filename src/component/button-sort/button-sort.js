import React from 'react';
import './button-sort.css'

const directionMap = {
  'asc': 'А-я',
  'desc': 'Я-а',
  '': 'А-Я'
}

const ButtonSort = ({ children, direct='', prop, onChangeOrder }) => (
  <button className="Button Button-sort" onClick={() => onChangeOrder(prop)}>
    {children} [{directionMap[direct]}]
  </button>
)

ButtonSort.propTypes = {}

export default ButtonSort
