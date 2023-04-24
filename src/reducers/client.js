import { ACTIVITY_STATS,EVENTS,TOPCLUBS, SLIDER_IMAGES} from '../constants/actionTypes';

const clientReducer = (state ={ activityStats:[],events:{past:[{image_path:""}],upcoming:[{image_path:""}]},topClubs:[],sliderImages:[{image:""}]} , action) => {
  switch (action.type) {
    case ACTIVITY_STATS:
         return {...state,activityStats:action.payload}
    case EVENTS:
        return {...state,events:action.payload}

    case TOPCLUBS:
      return {...state,topClubs:action.payload}

    case  SLIDER_IMAGES:
      return {...state,sliderImages:action.payload}
    default:
      return state;
  }
};

export default clientReducer;
