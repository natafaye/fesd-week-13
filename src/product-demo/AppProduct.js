import React, { Component } from 'react'
import ProductListItem from './ProductListItem'

export default class App extends Component {
  render() {
    const name = "Natalie"
    const paragraph = <p>I am a paragraph {4 + 2}</p>

    const products = [
      {
        id: 0,
        name: "Socks",
        price: 3,
        featured: false
      },
      {
        id: 1,
        name: "Shoes",
        price: 10,
        featured: true
      },
      {
        id: 2,
        name: "Hat",
        price: 4,
        featured: false
      },
    ]

    // const arrayOfJSX = products.map(product => <li className="list-group-item">
    //   ${product.price} - {product.name}
    // </li>)

    // if(product.featured) {
    //   className = "text-danger"
    // }

    return (
      <div>
        <h1>Welcome {name}!</h1>
        {paragraph}
        <ul className="list-group">
          { products.map(product => <ProductListItem key={product.id}/> ) }
        </ul>
      </div>
    )
  }
}
