import { AUTH, LOGOUT, CLIENT_MSG, ADMIN } from '../constants/actionTypes';

const authReducer = (state = { authData: null, message: null, admin: false }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data,admin:true};

    case LOGOUT:
      localStorage.removeItem('profile');
      return { ...state, authData: null,admin:false };

    case ADMIN:
      if (localStorage.getItem('profile')) return { ...state, admin: true };
      return state;

    case CLIENT_MSG:
      return { ...state, message: action.message };
    default:
      return state;
  }
};

export default authReducer;
