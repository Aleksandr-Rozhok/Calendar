import "./header.css";

const CalendarHeader = () => {
  return (
    <header className="calendar-header">
      <h1 className="calendar-title">Interview Calendar</h1>
      <button className="event-add">+</button>
    </header>
  );
};

export default CalendarHeader;
