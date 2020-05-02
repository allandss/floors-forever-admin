import produce from 'immer';

const INITIAL_STATE = {
  collectionSelected: null

};

export default function collection(state = INITIAL_STATE, action){
  return produce(state, draft => {
    switch(action.type){
      case '@collection/READ_COLLECTION_SUCCESS': {
        draft.collectionSelected = action.payload.collection;
        break;
      }
      default:
    } 
  });
}