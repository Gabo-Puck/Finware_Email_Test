import { createStore } from "redux";
import rootReducer from "./reducer";
import { applyMiddleware } from "redux";
import stateLogger from "./features/stateLoggerMiddleware";
import fetchEmails from "./features/fetchEmailsMiddleware";

const enchancedMiddleware = applyMiddleware(stateLogger, fetchEmails);

const store = createStore(rootReducer, enchancedMiddleware);

export default store;
