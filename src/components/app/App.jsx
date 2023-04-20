import React from "react";
import styled from "styled-components";

import CalendarHeader from "../header/Header.jsx";
import Weekdays from "../weekdays/Weekdays.jsx";
import CalendarFooter from "../footer/Footer.jsx";

const App = () => {
  const AppWrapper = styled.div`
    width: 740px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 50px;
  `
  return (
    <AppWrapper>
      <CalendarHeader />
      <Weekdays />
      <CalendarFooter />
    </AppWrapper>
  );
};

export default App;
