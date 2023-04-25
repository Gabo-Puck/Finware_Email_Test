import React from "react";
import "../sass/attachementItem.scss";

const AttachementItem = (props) => {
  const downloadFile = () => {
    console.log("x");
    fetch(props.file, { mode: "cors" })
      .then((res) => res.blob())
      .then((resource) => {
        const localUrl = window.URL.createObjectURL(resource);
        const aTag = document.createElement("a");
        aTag.style.display = "none";
        aTag.href = localUrl;
        aTag.download = `${props.name}`;
        document.body.appendChild(aTag);
        aTag.click();
        window.URL.revokeObjectURL(localUrl);
      });
  };

  return (
    <button
      title={props.name}
      className="attachement-item"
      onClick={downloadFile}
    >
      <span className="filename">{props.name}</span>
    </button>
  );
};
export default AttachementItem;
