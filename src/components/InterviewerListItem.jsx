import React, { useState } from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

const InterviewerListItem = (props) => {
  console.log(props);
  const { selected, setInterviewer, name, avatar, id } = props;
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
  });

  return (
    <li className={interviewerClass} onClick={() => setInterviewer(id)}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
};

export default InterviewerListItem;
