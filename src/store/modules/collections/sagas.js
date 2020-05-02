import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { readCollectionSuccess, updateCollectionSuccess } from './actions';

export function* createCollection({ payload }){
  console.log(payload);
  try{
    const { name, description, image, category } = payload;
    const response = yield call(api.post, '/serie', {
      name, 
      description,
      image, 
      category
    });

    console.log(response.data);
    
    toast.success('Successfully created');
    
    history.push('/collections');
    
  }catch(err){
    toast.error('Info incorrect.');
  }
    
}

export function* readCollection({ payload }){
  try{
    const { id } = payload;
    const response = yield call(api.get, `/serie/${id}`);
    console.log(response)
    const collection = response.data.serie;

    yield put(readCollectionSuccess(collection));
    
    history.push('/edit-collection');
    
  }catch(err){
    toast.error('error.');
  }
    
}

export function* updateCollection({ payload }){
  
  try{
    console.log(payload)
    const { _id, name, description, image } = payload.data;
    const collection = Object.assign({
      name, 
      description, 
      image,
      category: payload.category
    });

    const response = yield call(api.put, `/serie/${_id}`, collection);
    
    toast.success('successfully updated');

    yield put(updateCollectionSuccess(response.data));
    
    history.push('/collections');
    
  }catch(err){
    toast.error('error.');
  }
    
}


export default all([
  takeLatest('@collection/CREATE_COLLECTION_REQUEST', createCollection),
  takeLatest('@collection/READ_COLLECTION_REQUEST', readCollection),
  takeLatest('@collection/UPDATE_COLLECTION_REQUEST', updateCollection)
]);