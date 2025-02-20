import { ArtProduct } from "./main"

export async function getAllProducts(): Promise<ArtProduct[]> {
    const response = await fetch("http://localhost:3000/products")
    return await response.json()
}