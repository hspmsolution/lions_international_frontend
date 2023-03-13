import { CLIENT_MSG } from "../constants/actionTypes";
import * as api from "../api";

export const getActivity = () => async (dispatch) => {
    try {
      const { data, status } = await api.getActivity();
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

  export const getSubtype = () => async (dispatch) => {
    try {
      const { data, status } = await api.getSubtype();
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

  export const getCategory = () => async (dispatch) => {
    try {
      const { data, status } = await api.getCategory();
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