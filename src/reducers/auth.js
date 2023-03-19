import { AUTH, LOGOUT, CLIENT_MSG, ADMIN } from "../constants/actionTypes";
import decodeJWT from "../utils/jwtDecode";

const authReducer = (
  state = { authData: null, message: null, admin: false },
  action
) => {
  switch (action.type) {
    case AUTH: {
      const memberData = decodeJWT(action.payload.token);
      localStorage.setItem("profile", action.payload.token);
      return { ...state, authData: memberData, admin: true };
    }

    case LOGOUT:
      localStorage.removeItem("profile");
      return { ...state, authData: null, admin: false };

    case ADMIN: {
      if (state.admin) return state;
      const token = localStorage.getItem("profile");
      if (!token) return state;
      const decoded = decodeJWT(token);
      if (decoded.exp * 1000 < new Date().getTime()) {
        localStorage.removeItem("profile");
        return { ...state, authData: null, admin: false };
      }
      if (token) return { ...state, authData: decoded, admin: true };
      return state;
    }

    case CLIENT_MSG:
      return { ...state, message: action.message };
    default:
      return state;
  }
};

export default authReducer;
