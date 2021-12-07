import React from "react";
import "components/Button.scss";

export default function Button(props) {
  let buttonClass = "button";

  const { onClick, disabled, confirm, danger } = props;

  if (confirm) {
    buttonClass += " button--confirm";
  }

  if (danger) {
    buttonClass += " button--danger";
  }

  return (
    <button disabled={disabled} onClick={onClick} className={buttonClass}>
      {props.children}
    </button>
  );
}
