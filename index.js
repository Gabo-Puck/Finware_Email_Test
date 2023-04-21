import React from "react";

import { createRoot } from "react-dom/client";

import App from "./src/App";

import store from "./src/store";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

console.log("Initial state", store.getState());

const unsuscribe = store.subscribe(() => {
  console.log("State after dispatch", store.getState());
});

let email = {
  from: "mhallatt0@walmart.com",
  to: "cziem0@surveymonkey.com",
  subject: "Office Assistant IV",
  body: "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
  date: "3/31/2017",
  isReaded: false,
  avatar: "https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1",
  tag: "Indigo",
  attachements: [
    {
      file: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      name: "ut_nulla_sed.jpeg",
    },
  ],
  type: "inbox",
};

store.dispatch({
  type: "ADD_EMAIL",
  payload: email,
});
store.dispatch({
  type: "SPAM_EMAIL",
  payload: email,
});
email = store.getState().email.emailList[0];
store.dispatch({
  type: "DELETE_EMAIL",
  payload: email,
});
unsuscribe();

root.render(<App />);
