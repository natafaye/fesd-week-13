import React from 'react'

export default function Message() {
    const message = {
        id: 0,
        author: "Natalie",
        text: "Isn't this fun and hard!"
    }

    return (
        <div className="bg-light border p-3">
            <h5>{ message.author }</h5>
            <p>{ message.text }</p>
        </div>
    )
}
