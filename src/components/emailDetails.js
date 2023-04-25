import React from "react";
import { useSelector } from "react-redux";
import "../sass/emailDetails.scss";
import "../sass/emailAction.scss";
import EmailSvg from "../images/email-icon.svg";
import EmailActionBar from "./emailActionBar";
import AttachementList from "./attachementList";
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
            <EmailActionBar {...email} />
          </div>
          <div className="body">
            <div className="body-header">
              <div>
                <p className="sender">
                  {email.from}
                  <a href={`mailto:${email.from}`}>{`<${email.from}>`}</a>
                </p>
              </div>
              <p className="date">
                {formatDate(email.date, dateFormatOptions)}
              </p>
            </div>
            <p className="content">{email.body}</p>
            {email.attachements && (
              <div className="attachements">
                <AttachementList {...email} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <img className="empty-icon" src={EmailSvg} />
      )}
    </div>
  );
};
export default EmailDetails;
