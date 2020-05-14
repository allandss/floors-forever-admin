import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { readPhotoSuccess, updatePhotoSuccess } from './actions';

export function* createPhoto({ payload }){
  console.log(payload);
  console.log('chegou aqui');
  try{
    const { name, image } = payload;
    const response = yield call(api.post, '/photo', {
      name, 
      image
    });

    console.log(response.data);
    
    toast.success('Successfully created');
    
    history.push('/photos');
    
  }catch(err){
    toast.error('Info incorrect.');
  }
    
}

export function* readPhoto({ payload }){
  try{
    const { id } = payload;
    const response = yield call(api.get, `/photo/${id}`);
    console.log(response)
    const photo = response.data.photo;

    yield put(readPhotoSuccess(photo));
    
    history.push('/edit-photo');
    
  }catch(err){
    toast.error('error.');
  }
    
}

export function* updatePhoto({ payload }){
  
  try{
    console.log(payload);
    const { _id, name, image } = payload.data;
    const photo = Object.assign({
      name, 
      image
    });

    const response = yield call(api.put, `/photo/${_id}`, photo);
    console.log(response)
    
    toast.success('successfully updated');

    yield put(updatePhotoSuccess(response.data));
    
    history.push('/photos');
    
  }catch(err){
    toast.error('error.');
  }
    
}


export default all([
  takeLatest('@photo/CREATE_PHOTO_REQUEST', createPhoto),
  takeLatest('@photo/READ_PHOTO_REQUEST', readPhoto),
  takeLatest('@photo/UPDATE_PHOTO_REQUEST', updatePhoto)
]);