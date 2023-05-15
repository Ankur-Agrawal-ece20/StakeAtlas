import { CLEAR_DETAILS, SAVE_DETAILS } from "../actions/types";

const initialState = {
  product: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DETAILS:
      return {
        ...state.product,
        ...action.payload,
      };
    case CLEAR_DETAILS:
      return {
        product: null,
      };
    default:
      return state;
  }
};

export default productReducer;
