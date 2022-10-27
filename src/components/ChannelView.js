import React, { Component } from 'react'
import MessageCard from './MessageCard'

export default class ChannelView extends Component {
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
      <div className="col">
        <h3>#random</h3>
        { channel.messages.map(message => <MessageCard key={message.id}/>)}
      </div>
    )
  }
}
