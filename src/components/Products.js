import React from 'react'

class Products extends React.Component {
    render() {
      const productItems = this.props.products.map(product =>
          <div className="col-md-4 text-center product" key={product.id}>
            <div>
              <img src={`/products/0${product.id}.jpg`} alt={product.id}></img>
            </div>
            <div>
              <p>
                {product.title}
              </p>
              <p className="price">
                {product.price} تومان
              </p>
              <button 
                className="btn btn-primary"
                onClick={(e) => this.props.handleAddToCart(e, product)}
              >
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        )
        return (
          <div className="row">
            {productItems}
          </div>
        )
      }
}

export default Products