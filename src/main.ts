import { NPS_API_KEY } from "./API_KEY"
import { renderIdeas } from "./renderIdeas"
import { stupidFunction } from "./stupidfunction"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

type ThingToDo = {
  shortDescription: string
  // There's way more things, I just don't care
  activity: {
    id: string
  }
}

type WishListItem = {
  id: number
  text: string
  priority: number
}

// STATE
export let ideas: ThingToDo[] = []
export let wishlist: WishListItem[] = []
// start as empty until we fill them in from the API

// Replace the onclick with an add event listener
(document.getElementById("add-button") as HTMLButtonElement).addEventListener("click", addToWishlist)

async function getIdeas() {
    // Give the query parameter stateCode the value of "NV"
    const URL = "https://developer.nps.gov/api/v1/thingstodo?stateCode=NV&limit=5&api_key=" + NPS_API_KEY

    // Get the response "envelope"
    // await = Don't give me a promise, I'll wait
    // Get the data out of the response "envelope"
    const response = await fetch(URL)
    const data = await response.json()
    // set the state to the list
    ideas = data.data

    // Loop over it and make myself a new array of new objects that just have properties set to the crazy nested bits

    // render based on that state
    renderIdeas()
}

async function getWishlist() {
    const response = await fetch("http://localhost:3000/wishlist")
    const data = await response.json()
    wishlist = data
    renderWishlist()
}

const wishlistContainer = document.querySelector("#list-container")! // is an option as well

function renderWishlist() {
    wishlistContainer.innerHTML = `
        <ul class="list-group">
            ${wishlist.map(item => `
                <li class="list-group-item" onclick="deleteWishlistItem(${item.id})">${item.text}</li>
            `).join("")}
        </ul>
    `
}

async function deleteWishlistItem(idToDelete: number) {
    // delete from the backend
    // tradeoffs for waiting and tradeoffs for not waiting
    fetch("http://localhost:3000/wishlist/" + idToDelete, {
        method: "DELETE",
    })

    // delete from the frontend
    const indexToDelete = wishlist.findIndex(item => item.id === idToDelete)
    wishlist.splice(indexToDelete, 1)

    // update the UI based on the state
    renderWishlist()
}


getIdeas()
getWishlist()


const textbox = document.getElementById("textbox") as HTMLInputElement
const select = document.getElementById("priority-select") as HTMLSelectElement

async function addToWishlist() {
    const newItemData = {
        text: textbox.value,
        priority: select.value
    }

    // Adding on the backend
    const response = await fetch("http://localhost:3000/wishlist", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //"Authorization": 
        },
        body: JSON.stringify(newItemData)
    })
    const createdItem = await response.json()

    // Adding on the frontend
    stupidFunction(createdItem)

    // Update the UI
    renderWishlist()
}