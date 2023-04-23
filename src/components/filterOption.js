import React from "react";
import { CHANGE_FILTER } from "../actions/actionTypes";
import { useDispatch, useSelector } from "react-redux/es/exports";

import DeleteSvg from "../images/trash-icon.svg";
import SpamSvg from "../images/spam-icon.svg";
import InboxSvg from "../images/inbox-icon.svg";
import {
  FILTER_DELETE,
  FILTER_INBOX,
  FILTER_SPAM,
} from "../actions/filterOptions.js";
import "../sass/filterOption.scss";

const selectActualFilter = (state) => state.filter.filter;
const FilterOption = (props) => {
  const dispatch = useDispatch();
  const actualFilter = useSelector(selectActualFilter);
  const handleClick = () => {
    dispatch({ type: CHANGE_FILTER, payload: props.filter });
  };
  return (
    <div
      className={
        actualFilter === props.filter
          ? "filter-option active-filter"
          : "filter-option"
      }
      onClick={handleClick}
    >
      <img src={props.img} />
      <button>{props.text}</button>
    </div>
  );
};

export default FilterOption;
