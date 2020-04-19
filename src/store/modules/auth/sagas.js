import { takeLatest, call, put, all } from 'redux-saga/effects';
//import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }){
  const { email, password } = payload;

  const response = yield call(api.post, '/users/login', {
    email, 
    password
  });

  const { token, user } = response.data;

  yield put(signInSuccess(token, user));

  history.push('/products');

}

export function signOut(){
  history.push('/');
}


export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut)
]);