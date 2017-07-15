/**
 * Created by Oleg Rusak on 15.07.2017.
 */
import { connect } from 'react-redux'

import ForecastBlock from './../../component/forecast-block'

import { getVisibleForecast, getVisibleSort } from '../utils'

const factoryVisibleForecastBlock = (nameList) => {

  const mapStateToProps = (state) => {
    console.log(state[nameList])
    return {
      list: getVisibleForecast(state.regions, state[nameList]),
      sort: getVisibleSort(state[nameList].sort),
      filters: state[nameList].filters
    }
  }

  const mapDispatchToProps = dispatch => {

    return {
      onChangeOrder: order => {
        dispatch()
      },
      onFilterByText: text => {
        dispatch()
      },
      onFilterByFeatures: features => {
        dispatch()
      }
    }
  }

  const VisibleForecastBlock = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ForecastBlock)

  return VisibleForecastBlock
}

export default factoryVisibleForecastBlock
