import React, { Component } from 'react'
import MainArea from './MainArea'
import Sidebar from './Sidebar'

export default class App extends Component {
  render() {
    return (
      <div className="container"> 
        <div className="row">
          <Sidebar/>
          <MainArea/>
        </div>
      </div>
    )
  }
}

