import { REGION_DATA, ZONE_DATA,CLUB_LIST} from "../constants/actionTypes";

const clubsReducer = (state = { zone: [], region: [],clubList:[]}, action) => {
  switch (action.type) {
    case ZONE_DATA:
      return { ...state, zone: action.payload };

    case REGION_DATA:
      return { ...state, region: action.payload };
    case CLUB_LIST:
        return {...state,clubList:action.payload};
    default:
      return state;
  }
};

export default clubsReducer;
