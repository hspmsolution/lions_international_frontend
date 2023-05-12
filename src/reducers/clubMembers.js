import {  CLUB_MEMBERS} from '../constants/actionTypes';

const clubMemberReducer = (state ={ members:[]} , action) => {
  switch (action.type) {
    case CLUB_MEMBERS:
         return {...state,members:action.payload}
    default:
      return state;
  }
};

export default clubMemberReducer;