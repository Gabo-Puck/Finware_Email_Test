import React from "react";
import "../sass/attachementList.scss";
import AttachementItem from "./attachementItem";
const AttachementList = (props) => {
  let id = 1;
  const renderedItems = props.attachements.map((attachement) => (
    <AttachementItem key={id++} {...attachement} />
  ));
  return <ul className="attachement-list">{renderedItems}</ul>;
};

export default AttachementList;
