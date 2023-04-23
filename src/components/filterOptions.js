import React from "react";
import { CHANGE_FILTER } from "../actions/actionTypes";
import { useDispatch } from "react-redux/es/exports";

const FilterOptions = () => {
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    dispatch({ type: CHANGE_FILTER, payload: "deleted" });
  };
  const handleClickSpam = () => {
    dispatch({ type: CHANGE_FILTER, payload: "spam" });
  };
  const handleClickInbox = () => {
    dispatch({ type: CHANGE_FILTER, payload: "inbox" });
  };

  return (
    <div>
      <button onClick={handleClickDelete}>Delete</button>
      <button onClick={handleClickSpam}>Spam</button>
      <button onClick={handleClickInbox}>Inbox</button>
    </div>
  );
};

export default FilterOptions;
