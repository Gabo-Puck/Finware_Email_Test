import { FETCH_EMAILS } from "../actions/actionTypes";

const fetchEmailsMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === FETCH_EMAILS) {
    fetch("http://localhost:7000/emails")
      .then((response) => response.json())
      .then((emails) => {
        emails.forEach((email) => {
          email.type = "inbox";
          storeAPI.dispatch({ type: "ADD_EMAIL", payload: email });
        });
      });
  }
  return next(action);
};

export default fetchEmailsMiddleware;
