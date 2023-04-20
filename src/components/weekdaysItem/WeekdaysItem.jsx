import React from "react";

const WeekdaysItem = ({dayOfWeek, numberOfMonth}) => {
  return (
    <div className="weekdays-item_container">
      <div className="day-of-week">{dayOfWeek}</div>
      <div className="calendar-number">{numberOfMonth}</div>
    </div>
  );
};

export default WeekdaysItem;
