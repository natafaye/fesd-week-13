import React, { Component } from 'react'

export default class ChannelListItem extends Component {
  render() {

    // Hard coded data for now
    const channel = {
      id: 0,
      name: "random",
      messages: [
        {
          id: 0,
          text: "Hello there!"
        },
        {
          id: 1,
          text: "Hello there!"
        }
      ]
    }

    return (
      <li className="list-group-item">#{ channel.name}</li>
    )
  }
}
