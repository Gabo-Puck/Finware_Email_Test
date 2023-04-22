import React from "react";
import { useDispatch } from "react-redux/es/exports";
import {
  DELETE_EMAIL,
  SPAM_EMAIL,
  UNREAD_EMAIL,
} from "../../actionTypes/actionTypes";
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
      <button onClick={handleClickDelete}>Delete</button>
      <button onClick={handleClickUnread}>Unread</button>
      <button onClick={handleClickSpam}>Spam</button>
    </div>
  );
};

export default EmailActions;
