import React from "react";

const Header = (props) => {
  const { time } = props;
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{time}</h4>
      <hr className="apointmnet__separator" />
    </header>
  );
};

export default Header;
