export function createProductRequest(name, description, category, image, colors){
  return {
    type: '@products/CREATE_PRODUCT_REQUEST',
    payload: { name, description, category, image, colors },
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

export function updateProductRequest(data, category, colors){
  return {
    type: '@products/UPDATE_PRODUCT_REQUEST',
    payload: { data, category, colors },
  };
}

export function updateProductSuccess(data){
  return {
    type: '@products/UPDATE_PRODUCT_SUCCESS',
    payload: { data },
  };
}

