// Instead of this:
// <link rel="stylesheet" href="node_modules/whatever/bootstrap.min.css"/>
// We now do this:
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import renderChannelButtons from "./renderChannelButtons"
import makeMessageData from "./makeMessageData"
//import rebeccaPath from "./images/therebecca.jpg"

// You don't want onMessageSend to run immediately, so you wrap it in a baby function
// When doing addEventListener you don't need to pass the event object
// Instead of this:
// onclick="onMessageSend(even)"
// We now do this:
const sendButton = document.getElementById("send-button") as HTMLButtonElement
sendButton.addEventListener("click", onMessageSend)


type Message = {
    text: string
    channel: string
    id: number
}

export let currentChannel = "#general"
export let channels: string[] = []
let messages: Message[] = []

/***** LISTENING *****/

export function switchChannel(newChannel: string) {
    // Update the state
    currentChannel = newChannel
    // Re-render based on the state
    renderChannelButtons()
    renderMessages()
}

export const myTextbox = document.querySelector("#textbox-thing") as HTMLInputElement

async function onMessageSend(event: Event) {
    // Don't refresh the page you weirdo
    event.preventDefault()

    const messageData = makeMessageData()

    // Tell the user it's waiting
    sendButton.disabled = true
    sendButton.textContent = "Sending..."

    // Update the database
    const response = await fetch("http://localhost:3005/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData)
    })

    const createdMessage = await response.json()

    // Tell it we're no longer waiting
    sendButton.disabled = false
    sendButton.textContent = "Send"

    // Updating the state
    messages.push(createdMessage)

    // Re-rendering based on that updated state
    renderMessages()

    // Clear out the textbox
    myTextbox.value = ""
}

/***** RENDERING *****/

const paragraphContainer = document.getElementById("paragraph-container") as HTMLParagraphElement
function renderMessages() {
    paragraphContainer.replaceChildren()

    // Filter for only messages in the current channel
    messages
        .filter(m => m.channel === currentChannel)
        .forEach(message => {

            // Make a new little paragraph soul
            const paraSoul = document.createElement("p")

            // Set the text of the paragraph to the message text
            paraSoul.textContent = message.text

            // just for demo purposes
            // paraSoul.style.backgroundImage = "url(" + rebeccaPath + ")"

            // Listen to clicks on the paragraph
            paraSoul.addEventListener("click", () => {
                // Have it remove itself from the page
                paraSoul.remove()

                // remove from the state (fine enough way)
                const indexToRemove = messages.findIndex(m => m.id === message.id)
                messages.splice(indexToRemove, 1)

                // remove from the database
                // it could make sense to not wait here (downside, what if this go wrong? the user won't know)
                fetch("http://localhost:3005/messages/" + message.id, { method: "DELETE" })
            })

            // Move the paragraph from the Great Before to the page
            paragraphContainer.appendChild(paraSoul)
        })
}

// Render when the page first loads in
async function loadApp() {
    // get the data and put it in the "state" variables of channels and messages
    // I've got time, baby, make me wait
    // We are calling fetch and we ARE waiting
    const response = await fetch("http://localhost:3005/messages")
    const messagesData = await response.json()
    messages = messagesData
    const channelsResponse = await fetch("http://localhost:3005/channels")
    const channelsData = await channelsResponse.json()
    channels = channelsData

    // Pick whether to use await or not based on if the next bit of could needs to happen after
    // or needs to happen right away

    renderChannelButtons()
    renderMessages()
}

// We are calling loadApp and NOT waiting
loadApp()