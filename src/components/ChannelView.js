import React, { Component } from 'react'
import MessageCard from './MessageCard'

export default class ChannelView extends Component {
  render() {
    return (
      <div className="col">
        <h3>#{ this.props.channel.name }</h3>
        { this.props.channel.messages.map(message => <MessageCard key={message.id} msg={message}/>)}
        <textarea></textarea>
        <button>New MEssage</button>
      </div>
    )
  }
}
