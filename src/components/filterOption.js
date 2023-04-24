import React from "react";
import { CHANGE_FILTER } from "../actions/actionTypes";
import { useDispatch, useSelector } from "react-redux/es/exports";
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
          ? "filter-option active-option"
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
