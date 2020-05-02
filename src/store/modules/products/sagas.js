import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { readProductSuccess, updateProductSuccess } from './actions';

export function* createProduct({ payload }){
  console.log(payload)
  try{
    const { name, description, serie, image, warranty  } = payload;
    const response = yield call(api.post, '/products', {
      name, 
      description,
      serie,
      image,
      warranty
    });

    console.log(response.data);
    
    toast.success('Successfully created');
    
    history.push('/products');
    
  }catch(err){
    toast.error('Info incorrect.');
  }
    
}

export function* readProduct({ payload }){
  try{
    const { id } = payload;
    const response = yield call(api.get, `/products/${id}`);
    console.log(response)
    const product = response.data.products;

    yield put(readProductSuccess(product));
    
    history.push('/edit-product');
    
  }catch(err){
    toast.error('error.');
  }
    
}

export function* updateProduct({ payload }){
  
  try{
    console.log(payload);
    const { _id, name, description, image, warranty } = payload.data;
    const product = Object.assign({
      name, 
      description,
      image,
      warranty,
      serie: payload.serie
    });

    const response = yield call(api.put, `/products/${_id}`, product);
    console.log(response)
    
    toast.success('successfully updated');

    yield put(updateProductSuccess(response.data));
    
    history.push('/products');
    
  }catch(err){
    toast.error('error.');
  }
    
}


export default all([
  takeLatest('@products/CREATE_PRODUCT_REQUEST', createProduct),
  takeLatest('@products/READ_PRODUCT_REQUEST', readProduct),
  takeLatest('@products/UPDATE_PRODUCT_REQUEST', updateProduct)
]);