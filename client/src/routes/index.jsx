import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Details from '../components/Details';
import Cart from '../components/Cart';
import Default from '../components/Default';

export default () => 
  <Switch>
    <Route exact path="/" component={ProductList} />
    <Route exact path="/details"component={Details} />
    <Route exact path="/cart" component={Cart} />
    <Route component={Default} />
  </Switch>