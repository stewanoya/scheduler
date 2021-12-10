const getAppointmentsForDay = (state, day) => {
  const filteredDays = state.days.filter((state) => state.name === day);

  if (filteredDays.length === 0) {
    return [];
  }

  const filteredApptsInDay = filteredDays[0].appointments;

  const filteredAppointments = [];

  for (const appt of filteredApptsInDay) {
    filteredAppointments.push(state.appointments[appt]);
  }

  return filteredAppointments;
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

export { getAppointmentsForDay, getInterview };
