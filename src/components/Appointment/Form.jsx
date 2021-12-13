import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
const Form = (props) => {
  // const { interviewers, onSave, interview } = props;

  //state will do a check to see if interview has been passed as a result of edit
  const [student, setStudent] = useState(
    props.interview ? props.interview.student : ""
  );

  const [interviewer, setInterviewer] = useState(
    props.interview ? props.interview.interviewer.id : null
  );

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  const onCancel = () => {
    reset();
    props.onCancel();
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={onCancel}>
            Cancel
          </Button>
          <Button confirm onClick={() => props.onSave(student, interviewer)}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Form;
