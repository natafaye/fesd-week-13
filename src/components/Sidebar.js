import React, { Component } from 'react'
import ChannelListItem from './ChannelListItem'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="col-3 bg-light p-3">
        <ul className="list-group">
          { this.props.channels.map(channelParameter => <ChannelListItem key={channelParameter.id} channelProp={channelParameter}/> )}
        </ul>
      </div>
    )
  }
}
