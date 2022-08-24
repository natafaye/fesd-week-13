import React, { Component } from 'react'

export default class MessageCard extends Component {
    render() {
        const message = {
            id: 2,
            author: "Simone",
            text: "goodbye!"
        }

        return (
            <div className="border p-3 m-3">
                <strong>{ message.author }</strong>: { message.text }
            </div>
        )
    }
}
