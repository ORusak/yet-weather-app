import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

const store = configureStore({
  regions: {
    "0": {
      "id": "0",
      "features": ["☀", ""],
      "name": "Иваново",
      "weather": "+23ºC",
      "location": {
        "lat": 21,
        "lng": 22
      }
    },
    "1": {
      "id": "1",
      "features": ["{}", ""],
      "name": "Чертаново",
      "weather": "+3ºC",
      "location": {
        "lat": 10,
        "lng": 92
      }
    },
    "2": {
      "id": "2",
      "features": ["{}", ""],
      "name": "Малые бодуны",
      "weather": "-50ºC",
      "location": {
        "lat": 110,
        "lng": -32
      }
    }
  },
  forecast: {
    ids: ["0", "1"],
    type: 'forecast',
    sort: [{
      name: 'asc'
    }],
    filters: {
      searchText: 'анов',
      features: ['☀', '']
    }
  },
  forecastFavourite: {
    ids: ["2"],
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
})

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
