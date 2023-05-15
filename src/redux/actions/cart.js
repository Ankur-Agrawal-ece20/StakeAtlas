import { hideModal } from "./modal";
import { ADD_ADDRESS } from "./types";

export const addAddress = (address) => {
    return function (dispatch) {
        dispatch({
            type: ADD_ADDRESS,
            payload: address,
        });
        dispatch(hideModal())
    };
};