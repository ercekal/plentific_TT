import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import ProductEdit from './ProductEdit'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
    />
    <button
      // onClick={onAddToCartClicked}
      >
      Edit quote
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
