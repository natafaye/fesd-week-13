import React, { Component } from 'react'

export default class MessageCard extends Component {
  render() {
    return (
      <div className="bg-light p-3 m-3">
        { this.props.msg.text }
      </div>
    )
  }
}
