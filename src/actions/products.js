import { ADDPRODUCT,  CLIENT_MSG } from "../constants/actionTypes";
import * as api from "../api";

export const addProduct = (formData, navigate) => async (dispatch) => {
    try {
      const { data, status } = await api.addProduct(formData);
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