export function createCategoryRequest(name, description, image){
  return {
    type: '@category/CREATE_CATEGORY_REQUEST',
    payload: { name, description, image },
  };
}
export function readCategoryRequest(id){
  return {
    type: '@category/READ_CATEGORY_REQUEST',
    payload: { id },
  };
}
export function readCategorySuccess(category){
  return {
    type: '@category/READ_CATEGORY_SUCCESS',
    payload: { category },
  };
}

export function updateCategoryRequest(data){
  return {
    type: '@category/UPDATE_CATEGORY_REQUEST',
    payload: { data },
  };
}

export function updateCategorySuccess(data){
  return {
    type: '@category/UPDATE_CATEGORY_SUCCESS',
    payload: { data },
  };
}

