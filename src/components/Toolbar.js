import ToolbarButton from "./ToolbarButton";
import { toolbarButtonArray } from "./data";

export default function Toolbar() {
  return (
    <div className="row bg-secondary text-white">
      <div className="col p-4">
        {toolbarButtonArray.map(button => (
          <button key={button.id}>
            {button.text}
          </button>
        ))}
      </div>
    </div>
  )
}