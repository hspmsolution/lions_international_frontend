import {  CLUB_MEMBERS,MEMBER_DIRECTORY,BUSINESS_DIRECTORY} from '../constants/actionTypes';

const clubMemberReducer = (state ={ members:[],memberDirectory:[],buisnessDirectory:[]} , action) => {
  switch (action.type) {
    case CLUB_MEMBERS:
         return {...state,members:action.payload}
    case MEMBER_DIRECTORY:
        return {...state,memberDirectory:action.payload}
    case BUSINESS_DIRECTORY:
        return{...state,buisnessDirectory:action.payload}
    default:
      return state;
  }
};

export default clubMemberReducer;