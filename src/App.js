import React, { Component } from 'react'
import MainSlideView from './MainSlideView'
import SlideThumbnailList from './SlideThumbnailList'
import Toolbar from './Toolbar'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Toolbar/>
        <div className="row">
          <SlideThumbnailList/>
          <MainSlideView/>
        </div>
      </div>
    )
  }
}
