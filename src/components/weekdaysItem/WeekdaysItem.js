import "./weekdaysItem.css";

const WeekdaysItem = (props) => {
  return (
    <div className="weekdays-item_container">
      <div className="day-of-week">{}</div>
      <div className="calendar-number">{}</div>
    </div>
  );
};

export default WeekdaysItem;
