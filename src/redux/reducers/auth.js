import { getTokens } from "../../utils/auth/auth";
import { GET_CURRENT_USER, LOGIN_USER, LOGOUT_USER } from "../actions/types";

const initialState = {
  accessToken: getTokens().accessToken,
  isLoggedIn: false,
  refreshToken: getTokens().refreshToken,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        accessToken: action.payload,
        isLoggedIn: true,
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        accessToken: null,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
