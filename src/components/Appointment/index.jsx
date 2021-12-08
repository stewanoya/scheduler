import React from "react";
import "./styles.scss";

const Appointment = (props) => {
  const { time } = props;

  const formatAppt = () => {
    if (!time) {
      return "No Appointments";
    } else {
      return `Appointment at ${time}`;
    }
  };
  return <article className="appointment">{formatAppt()}</article>;
};

export default Appointment;
