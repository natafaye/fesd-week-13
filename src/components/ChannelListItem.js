import React, { Component } from 'react'

export default class ChannelListItem extends Component {
  render() {
    return (
      <li className="list-group-item">#{ this.props.channelProp.name}</li>
    )
  }
}
