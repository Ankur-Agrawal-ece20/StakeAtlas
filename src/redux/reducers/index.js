import { combineReducers } from "redux";
import authReducer from "./auth";
import cartReducer from "./cart";
import modalReducer from "./modal";
import productReducer from "./product";

const rootReducer = combineReducers({
  modal: modalReducer,
  auth: authReducer,
  product: productReducer,
  cart: cartReducer
});

export default rootReducer;
