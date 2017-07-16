/**
 * Created by Oleg Rusak on 17.07.2017.
 */

import reduce from 'lodash/reduce'

export function findElementByKey (list, key) {
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
export function getKey (obj) {

  return reduce(obj, (result, value, key) => {

    return key
  }, null)
}

export function getNextSortDirection (direct) {
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


