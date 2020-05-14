import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import category from './category/sagas';
import collection from './collections/sagas';
import products from './products/sagas';
import photo from './photo/sagas';

export default function* rootSaga(){
  return yield all([auth, user, category, products, collection, photo]);
}