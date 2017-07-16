/**
 * Created by Oleg Rusak on 15.07.2017.
 */
import { connect } from 'react-redux'

import ForecastBlock from './../../component/forecast-block'

import { getVisibleForecast, getVisibleSort } from '../utils'

//  actions
import { changeSearchValue, changeOrderValue, sortManualList } from '../../reducer/forecast-common'

const factoryVisibleForecastBlock = (nameList) => {

  const mapStateToProps = (state) => {

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
      onDragAndDrop: (source, target) => {
        dispatch(sortManualList(source, target))
      },
      //  todo: реализовать onFilterByFeatures
      onFilterByFeatures: features => {

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
