import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked }) => {

  return (
    <div>
      <h3>Your Cart</h3>
      <p>Total (Excl. VAT): &#36;{total / 1.2}</p>
      <p>VAT: &#36;{total * 0.2 / 1.2}</p>
      <br/>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
