import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import products from './products/reducer';
import category from './category/reducer';

export default combineReducers({
  auth,
  user,
  products,
  category
});