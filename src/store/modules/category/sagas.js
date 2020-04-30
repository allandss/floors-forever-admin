import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { readCategorySuccess, updateCategorySuccess } from './actions';

export function* createCategory({ payload }){
  console.log(payload);
  console.log('chegou aqui');
  try{
    const { name, description, image } = payload;
    const response = yield call(api.post, '/categories', {
      name, 
      description,
      image
    });

    console.log(response.data);
    
    toast.success('Successfully created');
    
    history.push('/categories');
    
  }catch(err){
    toast.error('Info incorrect.');
  }
    
}

export function* readCategory({ payload }){
  try{
    const { id } = payload;
    const response = yield call(api.get, `/categories/${id}`);
    console.log(response)
    const category = response.data.category;

    yield put(readCategorySuccess(category));
    
    history.push('/edit-category');
    
  }catch(err){
    toast.error('error.');
  }
    
}

export function* updateCategory({ payload }){
  
  try{
    console.log(payload);
    const { _id, name, description, image } = payload.data;
    const category = Object.assign({
      name, 
      description, 
      image
    });

    const response = yield call(api.put, `/categories/${_id}`, category);
    console.log(response)
    
    toast.success('successfully updated');

    yield put(updateCategorySuccess(response.data));
    
    history.push('/categories');
    
  }catch(err){
    toast.error('error.');
  }
    
}


export default all([
  takeLatest('@category/CREATE_CATEGORY_REQUEST', createCategory),
  takeLatest('@category/READ_CATEGORY_REQUEST', readCategory),
  takeLatest('@category/UPDATE_CATEGORY_REQUEST', updateCategory)
]);