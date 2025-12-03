import { channels, currentChannel, switchChannel } from "./main"

const buttonsContainer = document.getElementById("channel-buttons-container") as HTMLDivElement

export default function renderChannelButtons() {
    // clear out the out of date buttons
    buttonsContainer.replaceChildren()

    // for for-of forEach map
    channels.forEach(channelName => {
        // Make the button
        const channelButton = document.createElement("button")

        // Normal if version
        // channelButton.className = "btn btn-light"
        // if(channelName === currentChannel) {
        //     channelButton.className = "btn btn-success"
        // }

        // Ternary operator version
        channelButton.className = (channelName === currentChannel) ? "btn btn-success" : "btn btn-light"

        channelButton.textContent = channelName
        channelButton.addEventListener("click", () => switchChannel(channelName))

        // Move it into the page
        buttonsContainer.appendChild(channelButton)
    })
}