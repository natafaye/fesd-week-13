import React from 'react'

export default function Sidebar() {
    const randomNumber = Math.floor(Math.random() * 10)

    return (
        <div className="bg-dark text-white p-4">
            <h3>Links</h3>
            <p>I'm a pargraph { 5 + 3}</p>
            <ul>
                <li>This is a random number:  { randomNumber } </li>
            </ul>
        </div>
    )
}
