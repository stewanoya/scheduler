import React from "react";
import "components/Button.scss";
import classNames from "classnames";

export default function Button(props) {
  const { onClick, disabled, confirm, danger } = props;

  const buttonClass = classNames(
    "button",
    { "button--confirm": confirm },
    { "button--danger": danger }
  );

  return (
    <button disabled={disabled} onClick={onClick} className={buttonClass}>
      {props.children}
    </button>
  );
}
