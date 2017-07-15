/**
 * Created by Oleg Rusak on 15.07.2017.
 */

import map from 'lodash/map'
import filter from 'lodash/filter'
import reduceRight from 'lodash/reduceRight'
import difference from 'lodash/difference'
import assign from 'lodash/assign'

const filterListForecast = (list, searchText, features) => {

  return filter(list, item => {
    const isSearchTextOn = searchText

    if(isSearchTextOn) {
      const isNameNotIncludesText = !item.name.includes(searchText)

      if(isSearchTextOn && isNameNotIncludesText) {
        return false
      }
    }

    const isFilterFeatureOn = features.length !== 0

    if(isFilterFeatureOn) {
      const isFeatureDifference = difference(features, item.features).length === item.features.length

      if (isFeatureDifference) {
        return false
      }
    }

    return true
  })
}
/**
 *
 * Примечаение. Закладываемся сразу на множественную сортировку
 *
 * @param list
 * @param sort
 *
 * @returns {*}
 */
const sortListForeCast = (list, sort) => {
  //  перебираем с права на лево чтобы сортировка по первым элементам была последней
  return reduceRight(sort, (result, value, key) => {
    //  если порядок не определен пропускаем
    if (value !== 'asc' || value !== 'desc') {

      return result
    }

    const directionSort = value === 'asc' ? 1 : -1

    return result.sort((a, b) => {
      const value1 = a[key]
      const value2 = b[key]

      if(value1 < value2) {
        return -1 * directionSort
      }

      if(value1 > value2) {
        return directionSort
      }

      return 0
    })
  }, list)
}

export const getVisibleForecast = (list, { ids=[], sort=[], filters }) => {
  const { searchText='', features=[] } = filters

  const listForecast = map(ids, id => list[id])
  const listForecastFiltered = filterListForecast(listForecast, searchText, features)
  const listForecastOrdered = sort.length !== 0 ? sortListForeCast(listForecastFiltered, sort): listForecastFiltered

  return listForecastOrdered
}

export const getVisibleSort = (list) => {

  return reduceRight(list, (result, item) => {
    console.log(item)
    assign(result, item)

    return result
  }, {})
}


export default {
  getVisibleForecast
}
