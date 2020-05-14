import produce from 'immer';

const INITIAL_STATE = {
  photoSelected: null

};

export default function photo(state = INITIAL_STATE, action){
  return produce(state, draft => {
    switch(action.type){
      case '@photo/READ_PHOTO_SUCCESS': {
        draft.photoSelected = action.payload.photo;
        break;
      }
      default:
    } 
  });
}