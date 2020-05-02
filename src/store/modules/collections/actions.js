export function createCollectionRequest(name, description, image, category){
  return {
    type: '@collection/CREATE_COLLECTION_REQUEST',
    payload: { name, description, image, category },
  };
}
export function readCollectionRequest(id){
  return {
    type: '@collection/READ_COLLECTION_REQUEST',
    payload: { id },
  };
}
export function readCollectionSuccess(collection){
  return {
    type: '@collection/READ_COLLECTION_SUCCESS',
    payload: { collection },
  };
}

export function updateCollectionRequest(data, category){
  return {
    type: '@collection/UPDATE_COLLECTION_REQUEST',
    payload: { data, category },
  };
}

export function updateCollectionSuccess(data){
  return {
    type: '@collection/UPDATE_COLLECTION_SUCCESS',
    payload: { data },
  };
}

