import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/login';
import Products from '../pages/products';
import Product from '../pages/product';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/products" component={Products} isPrivate />
        <Route path="/products/new" component={Product} isPrivate />
      </Switch>
    </BrowserRouter>
  )
}