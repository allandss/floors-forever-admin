import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/login';
import Products from '../pages/products';
import Product from '../pages/product';
import ProductDetails from '../pages/product-details';
import Categories from '../pages/categories';
import Category from '../pages/category';
import CategoryDetails from '../pages/category-details';
import Collections from '../pages/collections';
import Collection from '../pages/collection';
import CollectionDetails from '../pages/collection-details';
import Photos from '../pages/photos';
import Photo from '../pages/photo';
import PhotoDetails from '../pages/photo-details';

export default function Routes(){
  return (
    
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/products" component={Products} isPrivate />
        <Route path="/new-product" component={Product} isPrivate />
        <Route path="/edit-product" component={ProductDetails} isPrivate />
        <Route path="/categories" component={Categories} isPrivate />
        <Route path="/new-category" component={Category} isPrivate />
        <Route path="/edit-category" component={CategoryDetails} isPrivate />
        <Route path="/collections" component={Collections} isPrivate />
        <Route path="/new-collection" component={Collection} isPrivate />
        <Route path="/edit-collection" component={CollectionDetails} isPrivate />
        <Route path="/photos" component={Photos} isPrivate />
        <Route path="/new-photo" component={Photo} isPrivate />
        <Route path="/edit-photo" component={PhotoDetails} isPrivate />
      </Switch>
   
  )
}