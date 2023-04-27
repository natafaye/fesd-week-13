import React from 'react'
import Message from './Message'

export default function MessageList() {
    const messages = [
        {
            id: 0,
            author: "Natalie",
            text: "Isn't this fun and hard!"
        },
        {
            id: 1,
            author: "Simone",
            text: "Isn't this fun and hard!"
        }
    ]

    // const messageComponents = []
    // for(let i = 0; i < messages.length; i++) {
    //     messageComponents.push(<Message/>)
    // }

    //const messageComponents = messages.map(message => <Message/>)

    return (
        <div>
            {messages.map(message => (
                <div className="bg-light border p-3">
                    <h5>{message.author}</h5>
                    <p>{message.text}</p>
                </div>
            ))}
            <button onClick={() => alert("hello!")}>Click Me</button>
        </div>
    )
}
