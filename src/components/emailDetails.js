import React from "react";
import { useSelector } from "react-redux";
import "../sass/emailDetails.scss";
import "../sass/emailAction.scss";
import EmailSvg from "../images/email-icon.svg";
import EmailActionBar from "./emailActionBar";
import { formatDate } from "../utils/dateFunctions";

const selectEmails = (state) => state.email.selectedEmail;
let dateFormatOptions = { weekday: "long", month: "short", day: "numeric" };
const EmailDetails = () => {
  const email = useSelector(selectEmails);

  return (
    <div className="email-details">
      {email ? (
        <div className="email-view">
          <div className="header">
            <h3 className="subject">{email.subject}</h3>
            <EmailActionBar id={email.id} email={email} />
          </div>
          <div className="body">
            <div className="body-header">
              <p className="sender">{email.from}</p>
              <p className="date">
                {formatDate(email.date, dateFormatOptions)}
              </p>
            </div>
            <p className="content">{email.body}</p>
          </div>
        </div>
      ) : (
        <img className="empty-icon" src={EmailSvg} />
      )}
    </div>
  );
};
export default EmailDetails;
