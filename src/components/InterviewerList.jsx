import React, { useState } from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

const InterviewerList = (props) => {
  const { interviewers } = props;

  const [interviewer, setInterviewer] = useState("");

  const parsedInterviewers = interviewers.map((person) => {
    return (
      <InterviewerListItem
        key={person.id}
        {...person}
        setInterviewer={() => setInterviewer(person.id)}
        selected={person.id === interviewer}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{parsedInterviewers}</ul>
    </section>
  );
};

export default InterviewerList;
