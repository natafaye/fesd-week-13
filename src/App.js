import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import ChannelView from './components/ChannelView'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <Sidebar/>
            <ChannelView/>
        </div>
      </div>
    )
  }
}
