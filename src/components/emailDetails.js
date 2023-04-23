import React from "react";
import { useSelector } from "react-redux";

const selectEmails = (state) => state.email.selectedEmail;

const EmailDetails = () => {
  const email = useSelector(selectEmails);

  return email ? (
    <div className="email-details">
      <p>{email.body}</p>
    </div>
  ) : (
    <div className="empty">Empty</div>
  );
};
export default EmailDetails;
