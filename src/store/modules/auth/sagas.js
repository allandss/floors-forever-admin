import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }){
  try{
    const { email, password } = payload;

    const response = yield call(api.post, '/users/login', {
      email, 
      password
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    
    toast.success('Success login');
    
    history.push('/products');
    
  }catch(err){
    toast.error('That email and password combination is incorrect.');
    yield put(signInFailure());
  }
  

}

export function signOut(){
  history.push('/');
}


export function setToken({payload}){
  if(!payload) return;

  const { token } = payload.auth;
  if(token){
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}


export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut)
]);