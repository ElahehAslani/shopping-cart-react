import React from 'react'

class Cart extends React.Component {
    render() {
      const {cartItems} = this.props
        return (
          <div className="cart">
            <h2>سبد خرید</h2>
            {
              cartItems.length === 0 ? "سبد خرید خالی است" :
                <div>
                  تعداد محصولات سبد خرید: {cartItems.length}
                </div>
            }
            {
              cartItems.length > 0 &&
              <div>
                <ul>
                  {cartItems.map(item => 
                    <li>
                      {item.title}
                      <button 
                        className="btn btn-light"
                        onClick={(e) => this.props.handleRemove(e, item)}
                      >
                        حذف محصول
                      </button>
                    </li>
                  )}
                </ul>
                <p>
                  مجموع: {cartItems.reduce((a, b) => a + b.price * b.count, 0)} تومان
                </p>
              </div>
            }
          </div>
        )
      }
}

export default Cart