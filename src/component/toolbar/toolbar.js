import React from 'react';
import './toolbar.css'

import ButtonSort from './../button-sort'
import InputSearch from './../input-search'

const Toolbar = ({sort, searchText, features,  onChangeOrder, onFilterByText }) => (
  <div className="Toolbar">
    <h4>Фильтры</h4>
    <InputSearch value={searchText} onFilterByText={onFilterByText}/>
    <h4>Сортировка</h4>
    <ButtonSort direct={sort['name']} prop={'name'} onChangeOrder={onChangeOrder}>Название</ButtonSort>
  </div>
)

export default Toolbar
