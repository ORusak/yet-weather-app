/**
 * Created by Oleg Rusak on 15.07.2017.
 */

import get from 'lodash/get'
import indexOf from 'lodash/indexOf'

import { findElementByKey, getNextSortDirection } from './utils'

const CHANGE_FILTER_NAME = 'yet-weather-app/forecast/CHANGE_FILTER_NAME'
const CHANGE_ORDER_LIST = 'yet-weather-app/forecast/CHANGE_ORDER_LIST'
const SORT_MANUAL_LIST = 'yet-weather-app/forecast/SORT_MANUAL_LIST'

export default function reducer (state = {
  ids: [],
  sort: [],
  filters: {
    searchText: '',
    features: []
  }
}, action) {
  //  этот редюсер должен сработать на обоих списках
  if (action.type === SORT_MANUAL_LIST) {
    const { source, target } = action

    const ids = [ ...state.ids ]

    const indexSource = indexOf(ids, source)
    const indexTarget = indexOf(ids, target)

    const isSourceInclude = indexSource !== -1
    const isTargetInclude = indexTarget !== -1

    if (isSourceInclude) {
      if (isTargetInclude) {
        //  если source и target в этом списке. меняем местами
        const idTemp = ids[indexSource]

        ids[indexSource] = ids[indexTarget]
        ids[indexTarget] = idTemp
      } else {
        //  если source в этом списке, а target нет. значит утащили в другой список
        ids.splice(indexSource, 1)
      }
    } else {
      //  если source не в этом списке, а target да. значит утащили сюда
      //  добавляем
      if (isTargetInclude) {
        ids.splice(indexTarget, 0, source)
      } else {
        //  если target это спец идентификатор 'add', то добавляем в пустой список
        if (target === 'add') {
          ids.splice(0, 0, source)
        }
        //  если source  и target не в этом списке, то в этот список ничего не попало
      }
    }

    return { ...state, ids }
  }

  //  определяем тип списка
  if (action.typeList !== state.type) {
    return state
  }

  switch (action.type) {
    case CHANGE_FILTER_NAME:
      const filters = { ...state.filters, searchText: action.value }

      return { ...state, filters }

    case CHANGE_ORDER_LIST:
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
  }
}

export function changeSearchValue (value, typeList) {

  return { type: CHANGE_FILTER_NAME, value, typeList }
}

export function changeOrderValue (prop, typeList) {

  return { type: CHANGE_ORDER_LIST, prop, typeList }
}

export function sortManualList (source, target) {

  return { type: SORT_MANUAL_LIST, source, target}
}


