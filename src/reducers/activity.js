import {
  ACTIVITY_CATEGORY,
  ACTIVITY_SUBTYPE,
  ACTIVITY_TYPE,
  ACTIVITY_PLACEHOLDER,
  REPORTED_ACTIVITY,
  CLUB_DIRECTORS,
  DELETE_ACTIVITY,
} from "../constants/actionTypes";

const activityReducer = (
  state = {
    type: [],
    subType: [],
    category: [],
    reportedActivity: [],
    placeHolder: "",
    club_directors: [],
  },
  action
) => {
  switch (action.type) {
    case CLUB_DIRECTORS:
      return { ...state, club_directors: action.payload };
    case ACTIVITY_TYPE:
      return { ...state, type: action.payload };

    case ACTIVITY_SUBTYPE:
      return { ...state, subType: action.payload };

    case ACTIVITY_CATEGORY:
      return { ...state, category: action.payload };

    case ACTIVITY_PLACEHOLDER:
      return { ...state, placeHolder: action.payload };

    case REPORTED_ACTIVITY:
      return { ...state, reportedActivity: action.payload };

    case DELETE_ACTIVITY:
      return {
        ...state,
        reportedActivity: state.reportedActivity.filter(
          (activity) => activity.activityId !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default activityReducer;
