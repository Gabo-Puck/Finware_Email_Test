import React from "react";
import { useSelector } from "react-redux";
import EmailListItem from "./emailListItem";

const selectEmails = (state) =>
  state.email.emailList.filter((e) => e.type == state.filter.filter);

const EmailList = () => {
  const emails = useSelector(selectEmails);
  const renderedEmails = emails.map((email) => {
    return <EmailListItem email={email} key={email.id} />;
  });

  return <ul className="email-list">{renderedEmails}</ul>;
};

export default EmailList;
