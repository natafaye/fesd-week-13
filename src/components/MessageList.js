import Message from "./Message";

export default function MessageList() {
  
  let hasError = false

  if(hasError) {
    return <div className="col text-danger">ERROR!</div>
  }

  return (
    <div className="col">
      <Message/>
      <Message/>
      <Message/>
    </div>
  )
}