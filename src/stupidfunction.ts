import { wishlist } from "./main"

type WishListItem = {
  id: number
  text: string
  priority: number
}

export function stupidFunction(createdItem: WishListItem) {
    wishlist.push(createdItem)
}