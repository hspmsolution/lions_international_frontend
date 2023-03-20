import { AUTH, CLIENT_MSG } from "../constants/actionTypes";
import * as api from "../api";
import decodeJWT from "../utils/jwtDecode";

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data, status } = await api.signIn(formData);
    dispatch({ type: AUTH, payload: data });
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
    const decoded = decodeJWT(data.token);
    if (decoded.detailsRequired) {
      dispatch({
        type: CLIENT_MSG,
        message: {
          info: "Complete your basic details in profile section",
          status: 200,
        },
      });
      navigate("/dashboard/app");
      // navigate("/profile");
    } else {
      navigate("/dashboard/app");
    }
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

// export const signup = (formData, navigate) => async (dispatch) => {
//   try {
//     const { data, status } = await api.signUp(formData);
//     dispatch({
//       type: CLIENT_MSG,
//       message: { info: data.successMessage, status },
//     });
//     if (data.successMessage === "Account created Successfully") {
//       dispatch({ type: AUTH, data });
//       navigate("/login");
//     }
//   } catch (error) {
//     dispatch({
//       type: CLIENT_MSG,
//       message: {
//         info: error.response.data?.message,
//         status: error.response.status,
//       },
//     });
//     console.log(error);
//   }
// };

// export const resetPassword = (formData, navigate) => async (dispatch) => {
//   try {
//     const { data, status } = await api.resetPassword(formData);

//     dispatch({
//       type: CLIENT_MSG,
//       message: { info: data.successMessage, status },
//     });
//   } catch (error) {
//     dispatch({
//       type: CLIENT_MSG,
//       message: {
//         info: error.response.data?.message,
//         status: error.response.status,
//       },
//     });
//     console.log(error);
//   }
// };
