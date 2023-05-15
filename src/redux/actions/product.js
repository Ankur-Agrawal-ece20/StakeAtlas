import { CLEAR_DETAILS, SAVE_DETAILS } from "./types";

export const saveProductDetails = (data) => {
  return function (dispatch) {
    dispatch({
      type: SAVE_DETAILS,
      payload: data,
    });
  };
};
export const clearProductDetails = () => {
  return function (dispatch) {
    dispatch({
      type: CLEAR_DETAILS,
    });
  };
};
