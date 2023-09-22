import * as api from "../api";

import { ZONE_DATA, REGION_DATA,CLUB_LIST,CLIENT_MSG} from "../constants/actionTypes";

export const getZone = () => async (dispatch) => {
  try {
    const { data } = await api.getZone();
    dispatch({ type: ZONE_DATA, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getClubs = () => async (dispatch) => {
  try {
    const { data } = await api.getClubs();
    dispatch({ type: CLUB_LIST, payload: data });
  } catch (error) {
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
    console.log(error);
  }
};

export const getRegion = () => async (dispatch) => {
  try {
    const { data } = await api.getRegion();
    dispatch({ type: REGION_DATA, payload: data });
  } catch (error) {
    console.log(error);
  }
};

