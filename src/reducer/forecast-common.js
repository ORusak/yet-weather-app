/**
 * Created by Oleg Rusak on 15.07.2017.
 */

import reduce from 'lodash/reduce'
import get from 'lodash/get'


const CHANGE_FILTER_NAME = 'yet-weather-app/forecast/CHANGE_FILTER_NAME'
const CHANGE_ORDER_LIST = 'yet-weather-app/forecast/CHANGE_ORDER_LIST'

export default function reducer (state = {
  ids: [],
  sort: [],
  filters: {
    searchText: '',
    features: []
  }
}, action) {
  //  определяем тип списка
  if (action.typeList !== state.type) {
    return state
  }

  switch (action.type) {
    case CHANGE_FILTER_NAME:
      const filters = { ...state.filters, searchText: action.value }

      return { ...state, filters }

    case CHANGE_ORDER_LIST:
      console.log(state)
      const propName = action.prop
      const index = findElementByKey(state.sort, propName)

      if (index === -1) {
        return state
      }

      const sort = [ ...state.sort ]
      sort[index] = {
        [propName]: getNextSortDirection(get(state, `sort[${index}][${propName}]`))
      }

      return { ...state, sort }
    default:
      return state
      break
  }
}

function findElementByKey (list, key) {
  for (let i = 0; i < list.length; i++) {
    const keyElement = getKey(list[i])

    if (key === keyElement) {
      return i
    }
  }

  return -1
}

/**
 * для объекта сортировки нужен первый ключ
 *
 * @param obj
 * @returns {*}
 */
function getKey (obj) {

  return reduce(obj, (result, value, key) => {

    return key
  }, null)
}

function getNextSortDirection (direct) {
  switch (direct) {
    case 'asc':
      return 'desc'
    case 'desc':
      return ''
    case '':
      return 'asc'
    default:
      return 'asc'
  }
}

export function changeSearchValue (value, typeList) {

  return { type: CHANGE_FILTER_NAME, value, typeList }
}

export function changeOrderValue (prop, typeList) {

  return { type: CHANGE_ORDER_LIST, prop, typeList }
}

