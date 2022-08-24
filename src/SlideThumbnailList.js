import React, { Component } from 'react'
import SlideThumbnail from './SlideThumbnail'

export default class SlideThumbnailList extends Component {
    render() {

        const slides = [
            {
                id: 0,
                number: 1,
                title: "Agenda"
            },
            {
                id: 1,
                number: 2,
                title: "Any Questions?"
            },
            {
                id: 5,
                number: 3,
                title: "What is React"
            }
        ]

        

        return (
            <div className="col-3 border">
                { slides.map(slide => <SlideThumbnail/>) }
            </div>
        )
    }
}
