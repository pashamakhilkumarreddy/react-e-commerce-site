import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from '../components/Loader';
import ProductList from '../components/ProductList';
import Details from '../components/Details';
import Cart from '../components/Cart';
import Default from '../components/Default';

import ErrorBoundary from '../components/Errors/ErrorBoundary';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));

export default () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <ErrorBoundary>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/products' component={ProductList} />
        <Route exact path='/details' component={Details} />
        <Route exact path='/cart' component={Cart} />
        <Route component={Default} />
      </ErrorBoundary>
    </Switch>
  </Suspense>
);