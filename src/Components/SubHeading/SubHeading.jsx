import React from "react";
import "./SubHeading.scss";

const SubHeading = (props) => {
  return (
    <div className="mh__subheading">
      <div className="horizentalLine"></div>
      <p className="title">{props.text}</p>
    </div>
  );
};

export default SubHeading;
