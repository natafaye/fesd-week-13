import React, { Component } from 'react'
import ChannelListItem from './ChannelListItem'

export default class Sidebar extends Component {
  render() {

    // Hard coded data for now
    const channels = [
      {
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
      },
      {
        id: 1,
        name: "general",
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
      },
    ]

    return (
      <div className="col-3 bg-light p-3">
        <ul className="list-group">
          { channels.map(channel => <ChannelListItem key={channel.id}/> )}
        </ul>
      </div>
    )
  }
}
