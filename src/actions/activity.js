import {
  CLIENT_MSG,
  ACTIVITY_CATEGORY,
  ACTIVITY_SUBTYPE,
  ACTIVITY_TYPE,
  ACTIVITY_PLACEHOLDER,
  REPORTED_ACTIVITY,
  CLUB_DIRECTORS,
  DELETE_ACTIVITY,
} from "../constants/actionTypes";
import * as api from "../api";
import * as xlsx from "xlsx";

export const getClubDirector = () => async (dispatch) => {
  try {
    const { data } = await api.getClubDirector();
    dispatch({ type: CLUB_DIRECTORS, payload: data });
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

export const getActivity = () => async (dispatch) => {
  try {
    const { data } = await api.getActivity();
    dispatch({ type: ACTIVITY_TYPE, payload: data });
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

export const getSubtype = (type) => async (dispatch) => {
  try {
    const { data } = await api.getSubtype(type);
    dispatch({ type: ACTIVITY_SUBTYPE, payload: data });
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

export const getCategory = (subtype,type) => async (dispatch) => {
  try {
    const { data } = await api.getCategory(subtype,type);
    dispatch({ type: ACTIVITY_CATEGORY, payload: data });
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

export const getPlaceHolder = (category,type,subType) => async (dispatch) => {
  try {
    const { data } = await api.getPlaceHolder(category,type,subType);
    dispatch({ type: ACTIVITY_PLACEHOLDER, payload: data.placeholder });
  } catch (error) {
    console.log(error);
  }
};

export const getReportedActivity = (clubId) => async (dispatch) => {
  try {
    const { data } = await api.getReportedActivity(clubId);
    dispatch({ type: REPORTED_ACTIVITY, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteActivity = (activityId) => async (dispatch) => {
  try {
    const { data, status } = await api.deleteActivity(activityId);
    dispatch({ type: DELETE_ACTIVITY, payload: activityId });
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
  }
};

export const addActivity = (formData) => async (dispatch) => {
  try {
    const { data, status } = await api.addActivity(formData);
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

export const editActivity = (formData,navigate) => async (dispatch) => {
  try {
    const { data, status } = await api.editActivity(formData);
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
    navigate("/dashboard/activity");
  } catch (error) {
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
    console.log(error);
    navigate("/dashboard/activity");
  }
};

export const registerActivity = (formData) => async (dispatch) => {
  try {
    const { data, status } = await api.registerActivity(formData);
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

export const downloadClubActivity = (data) => async (dispatch) => {
  try {
    const sheet = xlsx.utils.json_to_sheet(data);
    const book = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(book, sheet, "Sheet1");
    xlsx.writeFile(book, "club_activities.xlsx");

    dispatch({
      type: CLIENT_MSG,
      message: { info: "Club Activities Downloaded", status: 200 },
    });
  } catch (error) {
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: "Please try again later",
        status: 400,
      },
    });
    console.log(error);
  }
};

export const regionActivity = () => async (dispatch) => {
  try {
    const { data, status } = await api.regionActivity();
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

export const zoneActivity = () => async (dispatch) => {
  try {
    const { data, status } = await api.zoneActivity();
    // Write the data to an Excel file
    const sheet = xlsx.utils.json_to_sheet(data.activitiesData);
    const book = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(book, sheet, "Sheet1");
    xlsx.writeFile(book, "zone_activities.xlsx");

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
