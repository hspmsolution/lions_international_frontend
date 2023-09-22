import * as api from "../api";
import * as xlsx from "xlsx";
import {
  CLIENT_MSG,
  ALL_CLUBS,
  TITLES,
  ACTIVITY_STATS,
  EVENTS,
  TOPCLUBS,
  SLIDER_IMAGES,
  GALLARY_IMAGES,
  DISTRICT_DATA,
  RESOURCE_DATA
} from "../constants/actionTypes";

export const activityStats = () => async (dispatch) => {
  try {
    const { data, status } = await api.activityStats();
    dispatch({ type: ACTIVITY_STATS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const events = (filters) => async (dispatch) => {
  try {
  
    const { data, status } = await api.events(filters);
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
    const { data } = await api.slider();
    dispatch({ type: SLIDER_IMAGES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const gallery = () => async (dispatch) => {
  try {
    const { data } = await api.gallery();
    dispatch({ type: GALLARY_IMAGES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const allClubs = () => async (dispatch) => {
  try {
    const { data } = await api.allClubs();
    dispatch({ type: ALL_CLUBS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const titles = () => async (dispatch) => {
  try {
    const { data } = await api.titles();
    dispatch({ type: TITLES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const downloadMemberData =
  (selectedClubs, selectedTitles) => async (dispatch) => {
    try {
      const { data, status } = await api.downloadMemberData({
        selectedClubs,
        selectedTitles,
      });
      // Write the data to an Excel file
      const sheet = xlsx.utils.json_to_sheet(data.payload);
      const book = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(book, sheet, "Sheet1");
      xlsx.writeFile(book, "members.xlsx");

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


  export const districtData = () => async (dispatch) => {
    try {
      const { data } = await api.districtData();
      dispatch({ type: DISTRICT_DATA, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const downloadResources = () => async (dispatch) => {
    try {
      const { data } = await api.downloadResources();
      console.log(data);
      dispatch({ type: RESOURCE_DATA, payload: data });
    } catch (error) {
      console.log(error);
    }
  };