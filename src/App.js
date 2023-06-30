import Sidebar from "./components/Sidebar";
import SlideView from "./components/SlideView";
import Toolbar from "./components/Toolbar";

export default function App() {
  return (
    <div className="container">
      <Toolbar/>
      <div className="row">
        <Sidebar/>
        <SlideView/>
      </div>
    </div>
  )
}
