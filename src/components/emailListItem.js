import React from "react";
import EmailActions from "./emailAction";
import { SELECT_EMAIL } from "../actions/actionTypes";
import { useDispatch } from "react-redux";
import "../sass/emailListItem.scss";
import UserSvg from "../images/user-icon.svg";

const formatDate = (date) => {
  console.log("formatting", date);
  let options = { month: "short", day: "numeric" };
  let dateFormat = new Date(date);
  console.log(dateFormat);
  return dateFormat.toLocaleDateString("en-US", options);
};
const EmailListItem = (props) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    props.email.isReaded = true;
    dispatch({ type: SELECT_EMAIL, payload: props.email });
  };
  return (
    <li
      className={props.active ? "email-item active" : "email-item"}
      onClick={handleOnClick}
    >
      {/* <EmailActions id={props.email.id} /> */}
      {!props.email.isReaded && <div className="dot"></div>}

      <div className="header">
        <div>
          <img src={UserSvg} />
          <span className="from">
            <b>{props.email.from}</b>
          </span>
        </div>
        <span className="date">{formatDate(props.email.date)}</span>
      </div>
      <span className="subject">{props.email.subject}</span>
      <span className="description">{props.email.body}</span>
    </li>
  );
};

export default EmailListItem;
