export function createProductRequest(name, description, serie, image, warranty ){
  return {
    type: '@products/CREATE_PRODUCT_REQUEST',
    payload: { name, description, serie, image, warranty },
  };
}
export function readProductRequest(id){
  return {
    type: '@products/READ_PRODUCT_REQUEST',
    payload: { id },
  };
}
export function readProductSuccess(product){
  return {
    type: '@products/READ_PRODUCT_SUCCESS',
    payload: { product },
  };
}

export function updateProductRequest(data, serie){
  return {
    type: '@products/UPDATE_PRODUCT_REQUEST',
    payload: { data, serie },
  };
}

export function updateProductSuccess(data){
  return {
    type: '@products/UPDATE_PRODUCT_SUCCESS',
    payload: { data },
  };
}

