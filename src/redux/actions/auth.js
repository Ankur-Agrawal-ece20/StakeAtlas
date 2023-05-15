import { toast } from "react-toastify";
import axiosInstance from "../../axiosInstance";
import { removeTokens } from "../../utils/auth/auth";

import { GET_CURRENT_USER, LOGIN_USER, LOGOUT_USER } from "./types";

export const signupUser = (signupData, setLoading, navigate) => {
  return function (dispatch) {
    axiosInstance
      .post(`/auth/register`, signupData)
      .then((res) => {
        const { message } = res.data;
        toast.success(message);

        setLoading(false);
        if (res.data.success || res.data.token)
          dispatch(completeLogin(res.data.token));
      })

      .catch(({ response }) => {
        setLoading(false);
        try {
          switch (response.data.message) {
            case "No need, already verified":
              //   add a toast
              toast.info("Already Verified! Login.");

              break;
            case "Email Already registered, otp sent again":
              //   add a toast
              toast.success("Already Registered! OTP Sent Again");

              break;
            default:
              // server error
              toast.error("Oops, something went wrong");

              break;
          }
        } catch (e) {
          toast.error("Couldn't reach the server");
        }
      });
  };
};

export const completeLogin = (token) => {
  return function (dispatch) {
    localStorage.setItem("accessToken", token);
    dispatch({
      type: LOGIN_USER,
      payload: token,
    });
    toast.success("Logged in Successfully");

    dispatch(getCurrentUser());
  };
};

export const loginUser = (loginData, setLoading) => {
  return function (dispatch) {
    axiosInstance
      .post(`/auth/login`, loginData)
      .then((response) => {
        if (response.data.isSuccess || response.data.token)
          dispatch(completeLogin(response.data.token));
        else toast.error("Invalid ID or Password!");

        setLoading(false);
      })
      .catch(({ response }) => {
        setLoading(false);
        try {
          switch (response.status) {
            case 400:
              //   add a toast
              toast.error("Invalid Data!");

              break;
            case 401:
              //   add a toast
              toast.error("Invalid credentials!");

              break;
            default:
              // server error
              toast.error("Oops, something went wrong");

              break;
          }
        } catch (e) {
          toast.error("Couldn't reach the server");
        }
      });
  };
};

export const logoutUser = () => {
  return function (dispatch) {
    // remove stored tokens
    removeTokens();
    // LOGOUT_USER
    dispatch({
      type: LOGOUT_USER,
    });
    toast.success("Logged out successfully");
  };
};

export const getCurrentUser = () => {
  return function (dispatch) {
    axiosInstance.get(`/auth/getMe`).then((response) => {
      let data = response.data?.data;
      dispatch({
        type: GET_CURRENT_USER,
        payload: data,
      });
    });
    // dispatch current_user data
  };
};
