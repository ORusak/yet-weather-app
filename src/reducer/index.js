/**
 * Created by Oleg Rusak on 15.07.2017.
 */

import { combineReducers } from 'redux'

import forecast1 from './forecast-common'
import regions from './regions'
import options from './options'

export default combineReducers({
  regions,
  forecast: forecast1,
  forecastFavourite: forecast1,
  options
})
