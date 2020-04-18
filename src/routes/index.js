import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/login';
import Products from '../pages/products';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/products" component={Products} isPrivate />
      </Switch>
    </BrowserRouter>
  )
}