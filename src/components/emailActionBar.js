import React from "react";
import { useDispatch } from "react-redux/es/exports";
import {
  DELETE_EMAIL,
  SPAM_EMAIL,
  UNREAD_EMAIL,
  INBOX_EMAIL,
} from "../actions/actionTypes";
import {
  FILTER_DELETE,
  FILTER_INBOX,
  FILTER_SPAM,
} from "../actions/filterOptions";
import DeleteSvg from "../images/trash-icon.svg";
import SpamSvg from "../images/spam-icon.svg";
import UnreadSvg from "../images/unread-icon.svg";
import { useSelector } from "react-redux/es/exports";
const selectEmails = (state) => state.email.selectedEmail;

const EmailActions = (props) => {
  const email = useSelector(selectEmails);
  const dispatch = useDispatch();
  const handleClickDelete = (e) => {
    if (props.type == FILTER_DELETE) {
      dispatch({ type: INBOX_EMAIL, payload: props.id });
    } else {
      dispatch({ type: DELETE_EMAIL, payload: props.id });
    }
  };
  const handleClickUnread = (e) => {
    dispatch({ type: UNREAD_EMAIL, payload: props.id });
  };
  const handleClickSpam = (e) => {
    if (props.type == FILTER_SPAM) {
      dispatch({ type: INBOX_EMAIL, payload: props.id });
    } else {
      dispatch({ type: SPAM_EMAIL, payload: props.id });
    }
  };
  return (
    <div>
      <button
        onClick={handleClickUnread}
        className={email.isReaded ? "" : "active-option"}
      >
        <img src={UnreadSvg} />
      </button>
      <button
        onClick={handleClickDelete}
        className={email.type == FILTER_DELETE ? "active-option" : ""}
      >
        <img src={DeleteSvg} />
      </button>
      <button
        onClick={handleClickSpam}
        className={email.type == FILTER_SPAM ? "active-option" : ""}
      >
        <img src={SpamSvg} />
      </button>
    </div>
  );
};

export default EmailActions;
