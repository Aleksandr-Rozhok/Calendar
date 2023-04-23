import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import WeekdaysItem from "../weekdaysItem/WeekdaysItem.jsx";
import MonthItem from "../monthItem/MonthItem.jsx";

const Weekdays = () => {
  const WeekdaysContainer = styled.div`
    padding-left: 10%;
    background-color: #f7f6f6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 1px solid #cdcdcd;
    border-bottom: 1px solid #cdcdcd;
    flex-grow: 1;
  `;

  const ListOfDate = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
  `;

  const [activeIndex, setActiveIndex] = useState("0");
  const weekdays = ["M", "T", "W", "T", "F", "S", "S"];
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth(); 
  const year = today.getFullYear();
  const currDayOfWeek = today.getDay();

  useEffect(() => {
    handleActiveElem(date)
    // eslint-disable-next-line
  }, []);


  const handleActiveElem = (index) => {
    setActiveIndex(index);
  };

  const renderDateList = (currDayOfWeek) => {
    const arrOfDates = [];

    if (currDayOfWeek !== 1) {
      const startOfWeek = date - (currDayOfWeek - 1);

      for (let i = startOfWeek; i < startOfWeek + 7; i++) {
        arrOfDates.push(i);
      }
    }

    return arrOfDates.map((day, i) => {

      return <WeekdaysItem 
        key={uuidv4()}
        id={uuidv4()}
        day={day}
        dayOfWeek={weekdays[i]}
        isActive={activeIndex === day}
        handleActiveElem={() => handleActiveElem(date)}
        />
    })
  }

  const elementsOfWeek = renderDateList(currDayOfWeek);

  return (
    <WeekdaysContainer>
      <ListOfDate>
        {elementsOfWeek}
      </ListOfDate>
      <MonthItem month={month} year={year}/>
    </WeekdaysContainer>
  );
};

export default Weekdays;
