import React from "react";

const EmailListItem = (props) => {
  return (
    <li className="email-item">
      <p>
        #{props.email.id}|{props.email.subject}
      </p>
    </li>
  );
};

export default EmailListItem;
