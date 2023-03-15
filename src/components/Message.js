import React from 'react'

export default function Message() {

  const message = "Hello!"
  const paragraph = <p>{message.toUpperCase()}</p>

  return (
    <div>
      {paragraph}
       5 + 3
    </div>
  )
}
