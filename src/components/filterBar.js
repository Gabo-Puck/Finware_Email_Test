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
import FilterOption from "./filterOption";
import "../sass/filterBar.scss";

const selectActualFilter = (state) => state.filter.filter;
const FilterBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="filter-bar">
      <FilterOption filter={FILTER_INBOX} text="Inbox" img={InboxSvg} />
      <FilterOption filter={FILTER_SPAM} text="Spam" img={SpamSvg} />
      <FilterOption filter={FILTER_DELETE} text="Delete" img={DeleteSvg} />
    </div>
  );
};

export default FilterBar;
