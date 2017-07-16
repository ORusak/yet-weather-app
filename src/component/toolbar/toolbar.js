import React from 'react';
import './toolbar.css'

import ButtonSort from './../button-sort'
import InputSearch from './../input-search'

const Toolbar = ({sort, searchText, features,  onChangeOrder, onFilterByText }) => (
  <div className="Toolbar">
    toolbar
    <ButtonSort direct={sort['name']} prop={'name'} onChangeOrder={onChangeOrder}>Название</ButtonSort>
    <InputSearch value={searchText} onFilterByText={onFilterByText}/>
  </div>
)

export default Toolbar
