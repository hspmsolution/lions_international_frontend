import * as api from "../api";
import { CLIENT_MSG, STATEMENT } from "../constants/actionTypes";


export const expense= (formData) => async (dispatch) => {
    try {
      const { data, status } = await api.expense(formData);
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

  export const clubStatement= () => async (dispatch) => {
    try {
      const { data, status } = await api.clubStatement();
      dispatch({type:STATEMENT,payload:data});
     
    } catch (error) {
      console.log(error);
    }
  };