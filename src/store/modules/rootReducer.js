import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import category from './category/reducer';
import collection from './collections/reducer';
import products from './products/reducer';

export default combineReducers({
  auth,
  user,
  category,
  collection,
  products
});