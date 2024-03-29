import React from "react";

import calsses from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={calsses.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
