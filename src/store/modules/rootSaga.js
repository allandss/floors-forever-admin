import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import products from './products/sagas';
import category from './category/sagas';

export default function* rootSaga(){
  return yield all([auth, user, products, category]);
}