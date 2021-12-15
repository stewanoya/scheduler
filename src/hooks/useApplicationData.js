import { useState, useEffect } from "react";
import axios from "axios";
import { updateSpotsHelper } from "../helpers/spotsUpdate";
const useApplicationData = () => {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  //Grouping all get requests into one promise and passing data to default state.
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  const bookInterview = (id, interview) => {
    // grabbing the single appointment by using the id parameter(spelling?)
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    // copying previous state to new variable and reassigning new appointment to id
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const spots = updateSpotsHelper(state, appointments);

    const days = state.days.map((day) =>
      day.name === state.day ? { ...day, spots } : day
    );
    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      //make implicit
      return setState((prev) => ({
        ...prev,
        appointments,
        days,
      }));
    });
  };

  const deleteInterview = (id) => {
    return axios.delete(`/api/appointments/${id}`).then(() => {
      const appointments = { ...state.appointments };

      appointments[id].interview = null;
      const spots = updateSpotsHelper(state, appointments);
      const days = state.days.map((day) =>
        day.name === state.day ? { ...day, spots } : day
      );

      setState((prev) => ({
        ...prev,
        appointments,
        days,
      }));
    });
  };
  return { state, setDay, bookInterview, deleteInterview };
};

export default useApplicationData;
