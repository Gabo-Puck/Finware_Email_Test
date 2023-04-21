import emailReducer from "./features/email/emailSlice";
import filterReducer from "./features/filter/filterSlice";
import { combineReducers } from "redux";

// export default function rootReducer(state = {}, action) {
//   return {
//     email: emailReducer(state.email, action),
//     filter: filterReducer(state.filter, action),
//   };
// }

const rootReducer = combineReducers({
  email: emailReducer,
  filter: filterReducer,
});
export default rootReducer;
