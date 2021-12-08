import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

const Appointment = (props) => {
  const { time, student, interview } = props;

  return (
    <article className="appointment">
      <Header time={time} />
      {props.interview ? (
        <Show student={interview.student} interviewer={interview.interviewer} />
      ) : (
        <Empty />
      )}
    </article>
  );
};

export default Appointment;
