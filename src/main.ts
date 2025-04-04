import { renderMessageList } from "./rendering"
import { makeNewMessage } from "./makeNewMessage"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// SWITCH PROJECT FROM SIMPLE TO PROFESSIONAL
// use vite to make a project
// run "npm install" command
// bring .json file over if you're using json-server
// run json-server again in this folder instead
// copy over just the HTML stuff not the script tag into the index.html
// copy over the JS into the main.ts
// Switch any onClick="functionName()" to addEventListener("click", functionName)
// Switch link rel="stylesheet" to importing the CSS into your main.ts
// run the front end with "npm run dev" command NOT Live Server Go Live button

// BREAK INTO 3 FILES with import/export
// For breaking into files, don't make it hard on yourself
// Easiest thing to move is a pure-ish function
// It can't change a variable from another file (the state possibly)
// Feel free to make up a new dumb function to put in another file

// MAKE TYPESCRIPT HAPPY
// Go through each issue one by one, google if necessary
// Any getElementById you probably want to use the "as" to type it explicitly
// Make a named object type for your data/state and type that state variable with your data (based off your database)
// Type any parameters to a function

(document.getElementById("send-button") as HTMLButtonElement).addEventListener("click", handleSend)

type Message = {
    id: number
    username: string
    sent: string
    read: boolean
    text: string
}

// STATE
export let messageList: Message[] = []

// If you don't need the results on the next few lines, then a Promise is fine, no need to wait
// If you need the results on the next linse, then you don't want a Promise, you need to await the async function
// fetch is async

async function loadMessagesData() {
    // Get the data from the backend
    const response = await fetch("http://localhost:3000/messages")
    const fetchedData = await response.json()
    // Save the data in state
    messageList = fetchedData
    // Show the data in the page
    renderMessageList()
}
loadMessagesData()

async function handleSend() {
    const newMessage = makeNewMessage()

    // create on backend
    const response = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage)
    })
    const newlyCreatedMessage = await response.json()
    console.log(newlyCreatedMessage)

    // create on frontend = add to state, re-render
    messageList.push(newlyCreatedMessage)
    renderMessageList()
}
