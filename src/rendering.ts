import { messageList } from "./main"

const messagesListDiv = document.getElementById("messages-list") as HTMLDivElement

export function renderMessageList() {
    // Clear it out so we never get duplicates
    messagesListDiv.innerHTML = ""
    // loop over messageList and put HTML in messagesList div
    for (const message of messageList) {
        const div = document.createElement("div")
        div.textContent = `${message.username}: ${message.text} sent at ${message.sent}`
        messagesListDiv.appendChild(div)
    }
}