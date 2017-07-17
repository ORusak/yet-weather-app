import React, { Component } from 'react'

import './App.css'

import ForecastPage from './component/forecast-page'

class App extends Component {
  constructor (props) {
    super()

    this.fetchRegions = props.fetchRegions
  }

  componentDidMount () {

    this.serverRequest = this.fetchRegions()
  }

  componentWillUnmount () {
    this.serverRequest.abort()
  }

  render () {
    return (
      <ForecastPage/>
    )
  }
}

export default App
