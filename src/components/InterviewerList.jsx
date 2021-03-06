import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from "prop-types";
import "components/InterviewerList.scss";

const InterviewerList = (props) => {
  const { interviewers, value, onChange } = props;

  const parsedInterviewers = interviewers.map((person) => {
    return (
      <InterviewerListItem
        key={person.id}
        {...person}
        setInterviewer={() => onChange(person.id)}
        selected={person.id === value}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewers</h4>
      <ul className="interviewers__list">{parsedInterviewers}</ul>
    </section>
  );
};

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};

export default InterviewerList;
