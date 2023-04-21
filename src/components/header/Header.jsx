import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

import { useCreateEventMutation } from '../../api/apiSlice.jsx';

const CalendarHeader = () => {
  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 25px;
  `;
  const CalendarTitle = styled.h1`
    font-weight: 400;
  `;

  const ButtonAdd = styled.button`
    border: none;
    background-color: transparent;
    font-size: 45px;
    font-weight: 200;
    color: red;
    cursor: pointer;
  `;

  const [createEvent] = useCreateEventMutation();

  const addEvent = () => {
    const newEvent = new Date(prompt("Enter event time: YYYY-MM-DD HH:mm:ss"));
    const eventTime = newEvent.getHours();
    const eventDate = newEvent.getDay();

    createEvent({
      "time": eventTime,
      "day": eventDate,
      "id": uuidv4()
    });
  }

  return (
    <Header>
      <CalendarTitle>Interview Calendar</CalendarTitle>
      <ButtonAdd onClick={addEvent}>+</ButtonAdd>
    </Header>
  );
};

export default CalendarHeader;
