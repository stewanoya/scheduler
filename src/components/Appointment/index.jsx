import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisiualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

const Appointment = (props) => {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "Saving...";
  const DELETING = "Deleting...";
  const CONFIRM = "CONFRIM";
  const EDIT = "EDIT";

  const { time, interview, bookInterview, deleteInterview } = props;

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

  // once confirmed delete request is passed to backend
  const handleConfirm = () => {
    transition(DELETING);

    deleteInterview(props.id).then(() => transition(EMPTY));
  };

  //will take the initial delete request to confirm
  const handleDelete = () => {
    transition(CONFIRM);
  };

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onDelete={handleDelete}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === SAVING && <Status message={mode} />}

      {mode === DELETING && <Status message={mode} />}
      {mode === CONFIRM && (
        <Confirm
          message={mode}
          onCancel={() => back()}
          onConfirm={handleConfirm}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()}
        />
      )}

      {mode === EDIT && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()}
          interview={props.interview}
        />
      )}
    </article>
  );
};

export default Appointment;
