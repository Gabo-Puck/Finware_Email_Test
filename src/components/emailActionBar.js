import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { DELETE_EMAIL, SPAM_EMAIL, UNREAD_EMAIL } from "../actions/actionTypes";
import DeleteSvg from "../images/trash-icon.svg";
import SpamSvg from "../images/spam-icon.svg";
import UnreadSvg from "../images/unread-icon.svg";
const EmailActions = (props) => {
  const dispatch = useDispatch();
  const handleClickDelete = (e) => {
    dispatch({ type: DELETE_EMAIL, payload: props.id });
  };
  const handleClickUnread = (e) => {
    dispatch({ type: UNREAD_EMAIL, payload: props.id });
  };
  const handleClickSpam = (e) => {
    dispatch({ type: SPAM_EMAIL, payload: props.id });
  };
  return (
    <div>
      <button onClick={handleClickUnread}>
        <img src={UnreadSvg} />
      </button>
      <button onClick={handleClickDelete}>
        <img src={DeleteSvg} />
      </button>
      <button onClick={handleClickSpam}>
        <img src={SpamSvg} />
      </button>
    </div>
  );
};

export default EmailActions;
