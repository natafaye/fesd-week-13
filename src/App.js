import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import ChannelView from './components/ChannelView'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: [
        {
          id: 0,
          name: "random",
          messages: [
            {
              id: 0,
              text: "You're not great!"
            },
            {
              id: 1,
              text: "You're great!"
            }
          ]
        },
        {
          id: 1,
          name: "somethingelse",
          messages: [
            {
              id: 0,
              text: "Hello there!"
            },
            {
              id: 1,
              text: "Goodbye there!"
            },
            {
              id: 2,
              text: "I'm doing great"
            }
          ]
        },
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
            <Sidebar channels={this.state.channels}/>
            <ChannelView channel={this.state.channels[1]}/>
        </div>
      </div>
    )
  }
}
