import React from "react";

const Button = (props) => {
  const clases = `mh__cta-btn ${props.className}&& ${props.className}`;
  return (
    <button type={props.type} className={clases}>
      {props.children}
    </button>
  );
};

export default Button;
