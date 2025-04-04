const newMessageTextarea = document.getElementById("new-message-text") as HTMLTextAreaElement

export function makeNewMessage() {
  const newMessage = {
    username: "natalie",
    sent: Date.now().toString(),
    read: false,
    text: newMessageTextarea.value,
  };
  newMessageTextarea.value = ""
  return newMessage;
}
