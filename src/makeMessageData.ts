import { myTextbox, currentChannel } from "./main"

export default function makeMessageData() {
    return {
        text: myTextbox.value,
        channel: currentChannel
    }
}