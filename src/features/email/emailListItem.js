import React from "react";
import EmailActions from "./emailAction";
import { SELECT_EMAIL } from "../../actionTypes/actionTypes";
import { useDispatch } from "react-redux";
const EmailListItem = (props) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    alert("Hi");
    props.email.isReaded = true;
    dispatch({ type: SELECT_EMAIL, payload: props.email });
  };
  return (
    <li className="email-item" onClick={handleOnClick}>
      <EmailActions id={props.email.id} />
      <p>
        #{props.email.id}|{props.email.subject}
      </p>
    </li>
  );
};

export default EmailListItem;
