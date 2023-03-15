import React from 'react'
import Message from './Message'

export default function MessageList() {
  return (
    <div className="bg-danger text-white flex-grow-1">
      <Message/>
      <Message/>
      <Message/>
    </div>
  )
}
