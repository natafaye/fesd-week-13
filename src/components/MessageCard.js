import React, { Component } from 'react'

export default class MessageCard extends Component {
  render() {

    // Hard coded data for now
    const message = {
      id: 0,
      text: "Hello there!"
    }

    return (
      <div className="bg-light p-3 m-3">
        { message.text }
      </div>
    )
  }
}
