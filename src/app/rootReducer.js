import { combineReducers } from "redux";
// api
// slices
import authReducer, { authSlice } from "./redux/auth/authSlice";
import cartReducer, { cartSlice } from "./redux/cart/cartSlice";
import filterReducer, { filterSlide } from "./redux/filters/filterSlide";
import apiService from "./services/apiService";
// ----------------------------------------------------------------------

const rootReducer = combineReducers({
  [authSlice.name]: authReducer,
  [filterSlide.reducerPath]: filterReducer,
  [cartSlice.reducerPath]: cartReducer,
  [apiService.reducerPath]: apiService.reducer,
});

export default rootReducer;
