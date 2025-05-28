import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { NPS_API_KEY } from "./API_KEY"
import renderIdeas from "./renderIdeas"
import getAPIURL from "./getAPIURL"

type WishlistItem = {
    id: number
    text: string
    priority: number
}

// Typescript types are your minimum requirements
// What your code needs
// Everything else can be left off
type Idea = {
    shortDescription: string
}

export let ideas: Array<Idea> = [] // export let ideas: Idea[] = []
let wishlist: Array<WishlistItem> = [] // let wishlist: WishlistItem[] = []


async function getIdeas() {
    const URL = "https://developer.nps.gov/api/v1/thingstodo?stateCode=NV&limit=5&api_key=" + NPS_API_KEY

    const response = await fetch(URL)
    const data = await response.json()
    ideas = data.data
    renderIdeas()
}

async function getWishlist() {
    const response = await fetch(getAPIURL())
    const data = await response.json()
    wishlist = data
    renderWishlist()
}

const wishlistContainer = document.querySelector("#list-container") as HTMLDivElement

function renderWishlist() {
    wishlistContainer.innerHTML = `
        <ul class="list-group">
            ${wishlist.map(item => `
                <li class="list-group-item" onclick="deleteWishlistItem(${item.id})">${item.text}</li>
            `).join("")} 
        </ul>
    `// TODO: FIX DELETE 🥲
}

async function deleteWishlistItem(idToDelete: number) {
    fetch(getAPIURL() + idToDelete, {
        method: "DELETE",
    })

    const indexToDelete = wishlist.findIndex(item => item.id === idToDelete)
    wishlist.splice(indexToDelete, 1)

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
    const response = await fetch(getAPIURL(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newItemData)
    })
    const createdItem = await response.json()

    // Adding on the frontend
    wishlist.push(createdItem)

    // Update the UI
    renderWishlist()
}

document.getElementById("add-button")?.addEventListener("click", addToWishlist)


// CONVERSION CHECKLIST
// 1) Make the folder with vite
// 2) Copy over the javascript to main.ts and the HTML to index.html
// 3) Convert any onclick="" to addEventListener
// 4) Install and import bootstrap into a ts file
// 5) Break code into 3 files and import anything that's needed
//      * You cannot change variables that have been imported
// 6) Fix all the Typescript temper tantrums
//      * Parameters
//      * Arrays with nothing in it (probably make a named type for your object that's in the array)
//      * getElementById and queryString results (use "as" and google or autocomplete to find the HTML element type)