import React from 'react';
import './button-sort.css'

const directionMap = {
  'asc': 'А-я',
  'desc': 'Я-а',
  '': 'А-Я'
}

const ButtonSort = ({ children, direct='' }) => (
  <button className="Button Button-sort">
    {children} [{directionMap[direct]}]
  </button>
)

ButtonSort.propTypes = {}

export default ButtonSort
