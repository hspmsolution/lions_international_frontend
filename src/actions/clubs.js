import * as api from "../api";
import * as xlsx from "xlsx";
import { ZONE_DATA, REGION_DATA, CLIENT_MSG } from "../constants/actionTypes";

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

export const regionActivity = () => async (dispatch) => {
  try {
    const { data, status } = await api.regionActivity({});
    // Write the data to an Excel file
    const sheet = xlsx.utils.json_to_sheet(data.activitiesData);
    const book = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(book, sheet, "Sheet1");
    xlsx.writeFile(book, "region_activities.xlsx");

    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
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
