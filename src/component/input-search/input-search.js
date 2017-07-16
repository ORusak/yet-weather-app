import React from 'react';
import './input-search.css'

const InputSearch = ({ value, onFilterByText }) => (
  <input className="Input-search" value={value} onChange={onFilterByText}/>
)

export default InputSearch
