import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, day, setDay } = props;
  const parsedDayData = days.map((dayItem) => {
    return (
      <DayListItem
        key={dayItem.id}
        {...dayItem}
        setDay={setDay}
        selected={dayItem.name === day}
      />
    );
  });
  return <ul>{parsedDayData}</ul>;
}
