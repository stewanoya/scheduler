import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisiualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";

const Appointment = (props) => {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";

  const { time, interview, bookInterview } = props;

  const { mode, transition, back } = useVisiualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = (name, interviewer) => {
    //transition to saving animation
    transition(SAVING);
    const interview = {
      student: name,
      interviewer,
    };
    // the put request is returned as a promise, and once promise is resolved, then it will transition to show.
    bookInterview(props.id, interview).then(() => transition(SHOW));
  };

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show student={interview.student} interviewer={interview.interviewer} />
      )}
      {mode === SAVING && <Status message={mode} />}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()}
        />
      )}
    </article>
  );
};

export default Appointment;
