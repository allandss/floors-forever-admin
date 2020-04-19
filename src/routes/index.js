import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/login';
import Products from '../pages/products';
import Product from '../pages/product';
import ProductDetails from '../pages/product-details';

export default function Routes(){
  return (
    
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/products" component={Products} isPrivate />
        <Route path="/new-product" component={Product} isPrivate />
        <Route path="/edit-product" component={ProductDetails} isPrivate />
      </Switch>
   
  )
}