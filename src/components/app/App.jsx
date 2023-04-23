import React from "react";
import styled from "styled-components";

import CalendarHeader from "../header/Header.jsx";
import Weekdays from "../weekdays/Weekdays.jsx";
import CalendarFooter from "../footer/Footer.jsx";
import Sheet from "../calendarSheet/CalendarSheet.jsx";

const App = () => {
  const AppWrapper = styled.div`
    max-width: 740px;
    min-width: 390px;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;

    @media (min-width: 740px) {
      justify-content: center;
    }
  `
  
  return (
    <AppWrapper>
      <CalendarHeader />
      <Weekdays />
      <Sheet />
      <CalendarFooter />
    </AppWrapper>
  );
};

export default App;
