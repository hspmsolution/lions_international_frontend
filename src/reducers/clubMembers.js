import {  CLUB_MEMBERS,MEMBER_DIRECTORY,BUSINESS_DIRECTORY,ALL_MEMBERS} from '../constants/actionTypes';

const clubMemberReducer = (state ={ members:[],memberDirectory:[],buisnessDirectory:[],allMembers:[]} , action) => {
  switch (action.type) {
    case CLUB_MEMBERS:
         return {...state,members:action.payload}
    case MEMBER_DIRECTORY:
        return {...state,memberDirectory:action.payload}
    case ALL_MEMBERS:
        return {...state,allMembers:action.payload}
    case BUSINESS_DIRECTORY:
        return{...state,buisnessDirectory:action.payload}
    default:
      return state;
  }
};

export default clubMemberReducer;