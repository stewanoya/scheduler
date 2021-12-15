// function to get the current day, used in all other mapping functions
const getDay = (state, string) => {
  return state.days.find((day) => day.name === string);
};

const getAppointmentsForDay = (state, day) => {
  const filteredDays = getDay(state, day);

  if (!filteredDays) {
    return [];
  }

  const filteredApptsInDay = filteredDays.appointments;

  const filteredAppointments = [];

  for (const appt of filteredApptsInDay) {
    filteredAppointments.push(state.appointments[appt]);
  }

  return filteredAppointments;
};

const getInterviewersForDay = (state, day) => {
  const filteredDays = getDay(state, day);

  if (!filteredDays) {
    return [];
  }

  const filteredInterviewersInDay = filteredDays.interviewers;

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

export { getAppointmentsForDay, getInterview, getInterviewersForDay, getDay };
