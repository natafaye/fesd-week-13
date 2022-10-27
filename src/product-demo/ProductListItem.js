import React, { Component } from 'react'

export default class ProductListItem extends Component {
    render() {
        const product = {
            id: 0,
            name: "Socks",
            price: 3,
            featured: false
        }
        return (
            <li className="list-group-item">
                ${product.price} - <span className={(product.featured) ? "text-danger" : ""}>{product.name}</span>
            </li>
        )
    }
}
