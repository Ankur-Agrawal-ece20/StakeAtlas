
import { HIDE_MODAL, SHOW_MODAL } from "../actions/types";

const initState = {
  modalType: null,
  modalProps: {},
  modalTitle: "",
  modalSubTitle: "",
  noHeader: false,
};

const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        ...action.payload,
      };
    case HIDE_MODAL:
      return {
        ...state,
        modalType: null,
        modalProps: {},
        modalTitle: "",
        modalSubTitle: "",
        noHeader: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
