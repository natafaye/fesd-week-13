import { getAllProducts } from "./getAllProducts"

export type ArtProduct = {
    id: number
    name: string
    brand: string
    price: number
}

// STATE
let productList: ArtProduct[] = []

// FETCHING
async function loadInData() {
    productList = await getAllProducts()
    renderArtProducts()
}

async function addProduct() {
    const newProduct = {
        name: "Pencils",
        brand: "Very Good",
        price: 3
    }
    // Update on backend
    const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct)
    })
    const newProductWithId = await response.json()
    // Update on frontend
    productList.push(newProductWithId)
    // Update the UI
    renderArtProducts()
}

document.getElementById("add-button")!.addEventListener("click", addProduct)


// RENDERING
const tBody = document.getElementById("art-supplies-table-body") as HTMLTableSectionElement

function renderArtProducts() {
    // LISTENING
    const deleteProduct = async (idToDelete: number) => {
        console.log("Please delete this one:" + idToDelete)
        // Change the database on the backend
        await fetch("http://localhost:3000/products/" + idToDelete, {
            method: "DELETE"
        })
        // Change the state on the frontend
        productList = productList.filter(product => product.id !== idToDelete) // really common code pattern
        // Re-render based on the change state data
        renderArtProducts()
    }

    tBody.innerHTML = productList.map(product => `
        <tr>
            <td>${product.name}</td>
            <td>${product.brand}</td>
            <td>${product.price}</td>
            <td><button class="btn btn-danger product-delete-button" data-id="${product.id}">Delete</button></td>
        </tr>
    `).join("")

    tBody.querySelectorAll(".product-delete-button").forEach(button =>
        button.addEventListener("click", () => deleteProduct(parseInt((button as HTMLElement).dataset.id!)))
    )
}


loadInData()