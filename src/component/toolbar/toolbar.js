import React from 'react';
import './toolbar.css'

import ButtonSort from './../button-sort'
import InputSearch from './../input-search'

const Toolbar = ({sort, searchText, features }) => (
  <div className="Toolbar">
    toolbar
    <ButtonSort direct={sort['name']}>Название</ButtonSort>
    <InputSearch/>
  </div>
)

export default Toolbar
