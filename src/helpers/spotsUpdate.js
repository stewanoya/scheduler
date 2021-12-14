import { getDay } from "./selectors";

const updateSpotsHelper = (state, appointments) => {
  const foundDay = getDay(state, state.day);

  const parsedAppointments = foundDay.appointments.map(
    (appointmentID) => appointments[appointmentID]
  );
  const spotsRemaining = parsedAppointments.filter(
    (appointment) => appointment.interview === null
  ).length;
  return spotsRemaining;
};

export { updateSpotsHelper };
