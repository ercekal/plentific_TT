import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <div>
    <div style={{display: 'table'}}>
      <div style={{display: 'table-cell'}}>
        <h2>Quote Details</h2>
      </div>
      <div style={{display: 'table-cell'}}>
        <h2>Amend Quote</h2>
      </div>
    </div>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
