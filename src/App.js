import MessageList from "./components/MessageList"
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <Sidebar/>
        <MessageList/>
        <MovieList/>
      </div>
    </div>
  )
}


/**** EXAMPLE STAR RATING CODE ****/

// Step 1: make an array of the length of the number of stars we want
// [null, null, null]
// // Step 2: fill it with stars
// ["⭐", "⭐", "⭐"]
// // Step 3: join the array (unless it's react, then you don't need to)
// "⭐⭐⭐"

// // Step 1
// Array(numberOfStarsYouWant)
//     // Step 2
//     .fill("⭐")
//     // Step 3 (if not in React)
//     .join("")

const movieList = [
  {
    name: "Star Wars",
    rating: 5
  }
]

function MovieList() {
    return (
        <div>
            {movieList.map(movie => (
                <div>
                    {movie.name}
                    Rating: {Array(movie.rating).fill("⭐")}
                </div>
            ))}
        </div>
    )
}