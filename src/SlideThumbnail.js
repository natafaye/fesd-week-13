import React, { Component } from 'react'

export default class SlideThumbnail extends Component {
    render() {
        const slide = {
            id: 5,
            number: 5,
            title: "What is React"
        }

        return (
            <>
                <p>{ slide.number }.</p>
                <div className="border bg-light p-3 m-3">
                    <h4>{ slide.title }</h4>
                </div>
            </>
        )
    }
}
