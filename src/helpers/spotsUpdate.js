import { getDay } from "./selectors";

const updateSpotsHelper = (state, appointments) => {
  // storing getday object in variable
  const foundDay = getDay(state, state.day);

  // parsing through the appointment array and mapping the value at each index to the appointments object where the key is the appointment ID
  const parsedAppointments = foundDay.appointments.map(
    (appointmentID) => appointments[appointmentID]
  );

  // using .filter method to check where the array of objects contains a null value, and storing the length of that filtered array
  const spotsRemaining = parsedAppointments.filter(
    (appointment) => appointment.interview === null
  ).length;
  return spotsRemaining;
};

export { updateSpotsHelper };
