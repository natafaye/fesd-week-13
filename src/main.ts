import "bootstrap/dist/css/bootstrap.min.css"
import { TVShow } from "./types"
import { showsTable } from "./elements"

// State
// when you're working wtih a backend, the data starts out empty
let tvShows: TVShow[] = [] // Array<TVShow>

async function getShows() {
    const response = await fetch("http://localhost:3000/tvshows")
    const data = await response.json()
    // save the data into the state
    tvShows = data
    // re-render with the data
    renderTVShows()
}
// start the app out
getShows()

// Rendering

// as
// !
// HTML element types all start with the word HTML

function renderTVShows() {
    // clear it out first
    showsTable.innerHTML = ""
    // loop through the state list and show each one
    for(const show of tvShows) {
        const row = document.createElement("tr")
        row.innerHTML = `
            <td>${show.title}</td>
            <td>${show.genre}</td>
            <td>${show.seasons}</td>
            <td>${show.rating}</td>
            <td><button id="delete-button">Delete</button></td>
        `
        row.querySelector("#delete-button")!.addEventListener("click", async () => {
            // Update the API (the long term memory)
            const response = await fetch("http://localhost:3000/tvshows/" + show.id, {
                method: "DELETE"
            })
            const data = await response.json()
            // Update the state (the short term memory)
            // this is just javascript unrelated to fetch
            const indexToDelete = tvShows.indexOf(show)
            tvShows.splice(indexToDelete, 1)
            // Re-render
            renderTVShows()
        })
        showsTable.appendChild(row)
    }
}