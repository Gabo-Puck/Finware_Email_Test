import React from "react";
import { useSelector } from "react-redux";
import EmailListItem from "./emailListItem";
import FilterOptions from "../filter/filterOptions";

const selectEmails = (state) =>
  state.email.emailList.filter((e) => e.type == state.filter.filter);

const EmailList = () => {
  const emails = useSelector(selectEmails);
  const renderedEmails = emails.map((email) => {
    return <EmailListItem email={email} key={email.id} />;
  });

  return (
    <div>
      <FilterOptions />
      <ul className="email-list">{renderedEmails}</ul>
    </div>
  );
};

export default EmailList;
