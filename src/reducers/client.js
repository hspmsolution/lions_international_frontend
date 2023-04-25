import { ACTIVITY_STATS,EVENTS,TOPCLUBS, SLIDER_IMAGES, GALLARY_IMAGES} from '../constants/actionTypes';

const clientReducer = (state ={ activityStats:[],events:[],topClubs:[],sliderImages:[],galleryImages:[]} , action) => {
  switch (action.type) {
    case ACTIVITY_STATS:
         return {...state,activityStats:action.payload}
    case EVENTS:
        return {...state,events:action.payload}

    case TOPCLUBS:
      return {...state,topClubs:action.payload}

    case  SLIDER_IMAGES:
      return {...state,sliderImages:action.payload}

    case GALLARY_IMAGES:
      return {...state,galleryImages:action.payload}
      
    default:
      return state;
  }
};

export default clientReducer;
