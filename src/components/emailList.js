import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import EmailListItem from "./emailListItem";
import FilterOptions from "./filterOptions";

import "../sass/emailList.scss";
const selectEmails = (state) =>
  state.email.emailList.filter((e) => e.type == state.filter.filter);
const selectActiveEmail = (state) => state.email.selectedEmail;

const EmailList = () => {
  const emails = useSelector(selectEmails);
  const activeEmail = useSelector(selectActiveEmail);

  const renderedEmails = emails.map((email) => {
    return (
      <EmailListItem
        email={email}
        key={email.id}
        active={activeEmail === email}
      />
    );
  });

  return (
    <div className="email-list">
      <FilterOptions className="filter-options" />
      <ul className="list">{renderedEmails}</ul>
    </div>
  );
};

export default EmailList;
