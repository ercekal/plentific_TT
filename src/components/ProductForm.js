import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import { connect } from 'react-redux'
import { productUpdate } from '../actions'

class ProductForm extends Component {
  render() {
    return (
      <div>
        <div>
          <Input
          label="Title"
          onChangeText={value => this.props.productUpdate({ prop: 'title', value})}
          value={this.props.title}
          />
        </div>
        <div>
          <Input
          label="Price"
          onChangeText={value => this.props.productUpdate({ prop: 'price', value})}
          value={this.props.price}
          />
        </div>
      </div>
    )
  }
}


ProductForm.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
}

const mapStateToProps = (state) => ({
  product: state.productForm
})

export default connect(
  mapStateToProps,
  { productUpdate }
)(ProductForm)
