import { REGION_DATA, ZONE_DATA } from "../constants/actionTypes";

const clubsReducer = (state = { zone: [], region: [] }, action) => {
  switch (action.type) {
    case ZONE_DATA:
      return { ...state, zone: action.payload };

    case REGION_DATA:
      return { ...state, region: action.payload };
    default:
      return state;
  }
};

export default clubsReducer;
