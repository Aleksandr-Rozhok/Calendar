import styled from "styled-components";

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
    const newEvent = prompt("Enter event time: YYYY-MM-DD HH:mm:ss");
    console.log(typeof newEvent)
    createEvent({"time": newEvent});
  }

  return (
    <Header>
      <CalendarTitle>Interview Calendar</CalendarTitle>
      <ButtonAdd onClick={addEvent}>+</ButtonAdd>
    </Header>
  );
};

export default CalendarHeader;
