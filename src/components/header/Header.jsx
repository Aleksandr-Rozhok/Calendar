import React from "react";

import styled from "styled-components";

const CalendarHeader = () => {
  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  return (
    <Header>
      <CalendarTitle>Interview Calendar</CalendarTitle>
      <ButtonAdd>+</ButtonAdd>
    </Header>
  );
};

export default CalendarHeader;
