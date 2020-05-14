export function createPhotoRequest(name, image){
  return {
    type: '@photo/CREATE_PHOTO_REQUEST',
    payload: { name, image },
  };
}
export function readPhotoRequest(id){
  return {
    type: '@photo/READ_PHOTO_REQUEST',
    payload: { id },
  };
}
export function readPhotoSuccess(photo){
  return {
    type: '@photo/READ_PHOTO_SUCCESS',
    payload: { photo },
  };
}

export function updatePhotoRequest(data){
  return {
    type: '@photo/UPDATE_PHOTO_REQUEST',
    payload: { data },
  };
}

export function updatePhotoSuccess(data){
  return {
    type: '@photo/UPDATE_PHOTO_SUCCESS',
    payload: { data },
  };
}

