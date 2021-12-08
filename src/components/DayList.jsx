import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, value, onChange } = props;
  const parsedDayData = days.map((dayItem) => {
    return (
      <DayListItem
        key={dayItem.id}
        {...dayItem}
        setDay={onChange}
        selected={dayItem.name === value}
      />
    );
  });
  return <ul>{parsedDayData}</ul>;
}
