const getAppointmentsForDay = (state, day) => {
  //move getDay here
  const filteredDays = state.days.filter((state) => state.name === day);

  if (filteredDays.length === 0) {
    return [];
  }

  //fix this after [0]
  const filteredApptsInDay = filteredDays[0].appointments;

  const filteredAppointments = [];

  for (const appt of filteredApptsInDay) {
    filteredAppointments.push(state.appointments[appt]);
  }

  return filteredAppointments;
};

const getInterviewersForDay = (state, day) => {
  const filteredDays = state.days.filter((state) => state.name === day);

  if (filteredDays.length === 0) {
    return [];
  }

  const filteredInterviewersInDay = filteredDays[0].interviewers;

  if (!filteredInterviewersInDay) {
    return [];
  }

  const filteredInterviewersArray = [];

  for (const interviewer of filteredInterviewersInDay) {
    filteredInterviewersArray.push(state.interviewers[interviewer]);
  }

  return filteredInterviewersArray;
};

const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  }

  const interviewer = {
    ...interview,
    interviewer: state.interviewers[interview.interviewer],
  };
  return interviewer;
};

export { getAppointmentsForDay, getInterview, getInterviewersForDay };
