import React from 'react'
import "./App.css"
import Sidebar from './Sidebar'
import MessageList from './MessageList'

export default function App() {
  return (
    <>
      <div className="bg-light border p-3">
        Glack
      </div>
      <Sidebar/>
      <MessageList/>
    </>
  )
}
