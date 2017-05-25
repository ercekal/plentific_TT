import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import PropTypes from 'prop-types'
import { productUpdate, productSave } from '../actions';

class ProductEdit extends Component {
  componentWillMount() {
    _.each(this.props.product, (value, prop) => {
      this.props.productUpdate({ prop, value });
    });
  }
  onButtonPress() {
    const { title, price } = this.props;

    this.props.productSave({ title, price });
  }

  render() {
    return (
      <div>
        <ProductForm />
        <button onPress={this.onButtonPress.bind(this)} >
          Save Changes
        </button>
      </div>
    );
  }
}

ProductEdit.propTypes = {
  product: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
}

export default ProductEdit
