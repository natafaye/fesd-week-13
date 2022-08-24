import React, { Component } from 'react'
import MessageList from './MessageList'

export default class MainArea extends Component {
    render() {
        return (
            <>
                <div className="col">
                    Main Area
                    <MessageList/>
                </div>
                <div className="col">

                </div>
            </>
        )
    }
}