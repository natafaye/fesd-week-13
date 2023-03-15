import React, { Component } from 'react'
import MessageList from './components/MessageList'
import Sidebar from './components/Sidebar'

export default class App extends Component {
  render() {
    return (
      <div className="d-flex">
        <Sidebar/>
        <MessageList/>
      </div>
    )
  }
}
