import axios from "axios";
import store from "./redux/Store";
import { BASE_URL } from "./utils/envs";
const axiosInstance = axios.create();

// axios defaults
axiosInstance.defaults.baseURL = BASE_URL;

// interceptors
// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // bottom line is required, if you are using react-query or something similar
    if (config.headers["Authorization"]) {
      config.headers["Authorization"] = null;
    }
    config.headers["Authorization"] =
      "Bearer " + store.getState().auth.accessToken;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// for multiple requests
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  }
  //, function (error) {
  //   const originalRequest = error.config;
  //   // store.dispatch(logoutUser());
  //   // if refresh also fails with 401
  //   if (error.response.status === 401) {
  //     return store.dispatch(logoutUser());
  //   }

  //   // if retried request failed with 401 status
  //   if (error.response.status === 401 && originalRequest._retry) {
  //     // doesn't stops here, but also shows all the toast below due to Promise reject at the bottom
  //     return store.dispatch(logoutUser());
  //   }

  //   if (
  //     error.response.status === 401 &&
  //     !originalRequest.url.includes("login") &&
  //     !originalRequest._retry
  //   ) {
  //     // if refreshing logic is happening, then push subsequent req to the queue
  //     if (isRefreshing) {
  //       return new Promise(function (resolve, reject) {
  //         failedQueue.push({ resolve, reject });
  //       })
  //         .then(() => {
  //           return axiosInstance(originalRequest);
  //         })
  //         .catch((err) => {
  //           return Promise.reject(err);
  //         });
  //     }

  //     originalRequest._retry = true;
  //     isRefreshing = true;
  //   }

  //   return Promise.reject(error);
  // }
);

export default axiosInstance;
