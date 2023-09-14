import {
  ADMIN_REPORTS,
  CLIENT_MSG,
  ADMIN_POINTS,
  CLUBS_REPORTING,
  ADMIN_PDF,
  ADMIN_REPORTS_LOADING,
  SELECTED_MONTH
} from "../constants/actionTypes";
import * as api from "../api";

export const getAdminReports = (month) => async (dispatch) => {
  try {
    const { data } = await api.getAdminReports(month);
    dispatch({ type: ADMIN_REPORTS, payload: data });
    dispatch({ type: SELECTED_MONTH, payload: month });
  } catch (error) {
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
    dispatch({ type: ADMIN_REPORTS, payload: [] });
    dispatch({ type: SELECTED_MONTH, payload: "" });
    console.log(error);
  }
};

export const getPoints = () => async (dispatch) => {
  try {
    const { data } = await api.getPoints();
    dispatch({ type: ADMIN_POINTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addReport = (formData,navigate) => async (dispatch) => {
  try {
    const { data, status } = await api.addReport(formData);
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });

    // reset the value of form
    dispatch({ type: ADMIN_REPORTS, payload: [] });
    dispatch({ type: ADMIN_PDF, payload: "" });
    dispatch({type:ADMIN_REPORTS_LOADING,payload:false})
    navigate("/dashboard/app");
  } catch (error) {
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
    dispatch({type:ADMIN_REPORTS_LOADING,payload:false})
    console.log(error);
  }
};

export const clubsReporting = (clubId) => async (dispatch) => {
  try {
    const { data } = await api.clubsReporting(clubId);
    dispatch({ type: CLUBS_REPORTING, payload: data });
  } catch (error) {
    console.log(error);
  }
};
