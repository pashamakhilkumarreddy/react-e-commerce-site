import React, { Component, Fragment } from 'react';
import Title from './Title';
import Product from './Product';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  render() {
    return (
      <Fragment>
        <Title name={`our`} title={`products`} />
        <section className="section">
          <div className="container">
            
            <div className="columns">

            </div>
          </div>
        </section>
        {/* <Product /> */}
      </Fragment>
    )
  }
}