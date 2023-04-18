import * as api from "../api";
import { CLIENT_MSG, ACTIVITY_STATS,EVENTS,TOPCLUBS, SLIDER_IMAGES} from "../constants/actionTypes";

export const activityStats = () => async (dispatch) => {
  try {
    const { data, status } = await api.activityStats();
    dispatch({ type: ACTIVITY_STATS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const events = () => async (dispatch) => {
    try {
      const { data, status } = await api.events();
      dispatch({ type: EVENTS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const topClubs = () => async (dispatch) => {
    try {
      const { data, status } = await api.topClubs();
      dispatch({ type: TOPCLUBS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };


export const slider = () => async (dispatch) => {
    try {
      const { data} = await api.slider();
       dispatch({type:SLIDER_IMAGES,payload:data})
    } catch (error) {
      console.log(error);
    }
  };
