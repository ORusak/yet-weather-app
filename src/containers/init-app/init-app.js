/**
 * Created by Oleg Rusak on 15.07.2017.
 */
import { connect } from 'react-redux'
import map from 'lodash/map'

import App from '../../App'

//  actions
import { fetchRegions } from '../../reducer/regions'
import { updateListForecast } from '../../reducer/forecast-common'

const mapStateToProps = (state) => {

  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchRegions: () => {
      dispatch(fetchRegions())
        .then(action => {
          const listId = map(action.regions, 'id')

          dispatch(updateListForecast(listId))
        })
    }
  }
}

const InitApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default InitApp
