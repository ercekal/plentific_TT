import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import { productUpdate, productCreate } from '../actions';

class ProductCreate extends Component {

  onButtonPress() {
    const { title, price } = this.props;

    this.props.productCreate({ title, price });
  }

  render() {
    return (
      <div>
        <ProductForm {...this.props} />
        <div>
          <button onClick={this.onButtonPress.bind(this)}>
            Create Item
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ productForm }) => {
  const { title, price } = productForm;
  return { title, price };
}

export default connect(mapStateToProps,
  {productUpdate, productCreate})(ProductCreate);
