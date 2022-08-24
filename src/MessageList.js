import React, { Component } from 'react'
import MessageCard from './MessageCard'

export default class MessageList extends Component {
  render() {

    const messages = [
        {
            id: 0,
            author: "Natalie",
            text: "hello there!"
        },
        {
            id: 1,
            author: "Natalie",
            text: "hey self!"
        },
        {
            id: 2,
            author: "Simone",
            text: "goodbye!"
        }
    ]

    return (
      <div>
        <h2>Messages:</h2>
        { messages.map(message => <MessageCard/>)}
      </div>
    )
  }
}
