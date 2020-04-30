import produce from 'immer';

const INITIAL_STATE = {
  categorySelected: null

};

export default function category(state = INITIAL_STATE, action){
  return produce(state, draft => {
    switch(action.type){
      case '@category/READ_CATEGORY_SUCCESS': {
        draft.categorySelected = action.payload.category;
        break;
      }
      default:
    } 
  });
}