import React from 'react'
import './App.css'
import Products from './components/Products'
import './components/Products.css'
import Cart from './components/Cart'
import './components/Cart.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { products: [], cartItems: [] }
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  componentWillMount() {
    fetch("http://localhost:8000/products")

      .then(res => res.json())
      .then(data => this.setState({
        products: data
      }))
      if (localStorage.getItem('cartItems')) {
        this.setState({
          cartItems: JSON.parse(localStorage.getItem('cartItems'))
        })
      }
  }

  handleAddToCart(e, product) {
    this.setState(state => {
      const cartItems = state.cartItems
      let productExists = false
      cartItems.forEach(item => {
        if (item.id === product.id) {
          productExists = true
          item.count++
        }
      })
      if (!productExists) {
        cartItems.push({ ...product, count: 1 })
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      return cartItems
    })
  }

  handleRemove(e, item) {
    this.setState(state => {
      const cartItems = state.cartItems.filter(p => p.id !== item.id)
      localStorage.setItem('cartItems', cartItems)
      return {cartItems}
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <Products 
              products = {this.state.products}
              handleAddToCart = {this.handleAddToCart}
            />
          </div>
          <div className="col-md-4">
            <Cart 
              cartItems = {this.state.cartItems}
              handleRemove = {this.handleRemove}
             />
          </div>
        </div>
      </div>
    )
  }
}

export default App