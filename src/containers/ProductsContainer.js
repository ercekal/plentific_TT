import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import ProductEdit from '../components/ProductEdit'

const ProductsContainer = ({ products, addToCart }) => (

  <ProductsList title="Products">
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)} />
    )}
    {products.map(product =>
      <ProductEdit
        key={product.id}
        product={product} />
    )}
  </ProductsList>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
