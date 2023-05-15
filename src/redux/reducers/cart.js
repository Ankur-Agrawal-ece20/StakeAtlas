import { ADD_ADDRESS, } from "../actions/types";

const initialState = {
    address: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return {
                ...state,
                address: action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;
