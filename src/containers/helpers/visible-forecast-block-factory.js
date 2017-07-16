/**
 * Created by Oleg Rusak on 15.07.2017.
 */
import { connect } from 'react-redux'

import ForecastBlock from './../../component/forecast-block'

import { getVisibleForecast, getVisibleSort } from '../utils'

//  actions
import { changeSearchValue, changeOrderValue } from '../../reducer/forecast-common'

const factoryVisibleForecastBlock = (nameList) => {

  const mapStateToProps = (state) => {
    console.log(state)
    return {
      list: getVisibleForecast(state.regions, state[nameList]),
      sort: getVisibleSort(state[nameList].sort),
      filters: state[nameList].filters
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {

    return {
      onChangeOrder: (prop) => {
        dispatch(changeOrderValue(prop, nameList))
      },
      onFilterByText: ev => {
        dispatch(changeSearchValue(ev.target.value, nameList))
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
