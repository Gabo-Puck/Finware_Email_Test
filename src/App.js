import React from "react";
import EmailList from "./components/emailList";
import store from "./store";
import { FETCH_EMAILS } from "./actions/actionTypes";
import EmailDetails from "./components/emailDetails";
import "./sass/App.scss";
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

async function getEmailsFromAPI() {
  let response = await fetch("http://localhost:7000/emails");
  let emails = await response.json();
  return emails;
}

function getNewEmails() {
  store.dispatch({ type: FETCH_EMAILS });
  setTimeout(getNewEmails, 90000);
}

getNewEmails();

const App = () => {
  return (
    <div className="container">
      <EmailList />
      <EmailDetails />
    </div>
  );
};
export default App;
