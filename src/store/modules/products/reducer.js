import produce from 'immer';

const INITIAL_STATE = {
  productSelected: null

};

export default function products(state = INITIAL_STATE, action){
  return produce(state, draft => {
    switch(action.type){
      case '@products/READ_PRODUCT_SUCCESS': {
        draft.productSelected = action.payload.product;
        break;
      }
      default:
    } 
  });
}