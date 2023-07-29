import * as api from "../api";

import { ZONE_DATA, REGION_DATA} from "../constants/actionTypes";

export const getZone = () => async (dispatch) => {
  try {
    const { data } = await api.getZone();
    dispatch({ type: ZONE_DATA, payload: data });
  } catch (error) {
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

