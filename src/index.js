import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InitApp from './containers/init-app';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

//  todo: добавить получение из localStorage
const initialState = {
  regions: {
  },
  forecast: {
    ids: [],
    type: 'forecast',
    sort: [{
      name: 'asc'
    }],
    filters: {
      searchText: '',
      features: ['☀', '']
    }
  },
  forecastFavourite: {
    ids: [],
    type: 'forecastFavourite',
    sort: [{
      name: ''
    }],
    filters: {
      searchText: '',
      features: ['{}']
    }
  },
  options: {
    unit: 'C'
  }
}
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={ store }>
    <InitApp />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
