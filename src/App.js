import "./App.css"
import subtract from "./myspecialstuff"
import Sidebar from "./Sidebar"
import MovieList from "./MovieList"

export default function App() {
  subtract(2, 5)

  return (
    <div>
      <Sidebar/>
      <MovieList/>
      <Sidebar/>
    </div>
  )

  // React in the background does this:
  // Make a div
  // Call Sidebar() take the JSX that's returned and put in the div
  // Call MovieList() take the JSX that's returned and put in the div
}