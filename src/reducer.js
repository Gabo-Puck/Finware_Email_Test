import emailReducer from "./features/email/emailSlice";
import filterReducer from "./features/filter/filterSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  email: emailReducer,
  filter: filterReducer,
});
export default rootReducer;
