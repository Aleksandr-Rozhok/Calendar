import styled from "styled-components";
import React, { useState } from 'react';

import { useGetWeekdaysQuery, useGetMonthQuery } from '../../api/apiSlice.jsx';
import Spinner from '../spinner/Spinner';
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
  `;

  const LoadingError = styled.h5`
    color: red;
  `;
  const ListOfDate = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
  `;

const [activeIndex, setActiveIndex] = useState("0");

  const {
      data: daysOfWeek = [],
      isLoading,
      isError,
  } = useGetWeekdaysQuery();

  const {
    data: month = ''
  } = useGetMonthQuery(10);

  if (isLoading) {
    return <Spinner/>;
  } else if (isError) {
    return <LoadingError>Ошибка загрузки</LoadingError>
  }

  const handleActiveElem = (index) => {
    setActiveIndex(index);
  };

  const renderDateList = (arr) => {
    if (arr.length === 0) {
        return <h5 className="text-center mt-5">Данных пока нет</h5>
    }

    return arr.map(({id, ...props}) => {
        return <WeekdaysItem 
          key={id}
          id={id}
          isActive={activeIndex === id}
          handleActiveElem={() => handleActiveElem(id)}
          {...props}/>
    })
  }

  const elementsOfWeek = renderDateList(daysOfWeek.slice());
  return (
    <WeekdaysContainer>
      <ListOfDate>
        {elementsOfWeek}
      </ListOfDate>
      <MonthItem monthAndYear={month}/>
    </WeekdaysContainer>
  );
};

export default Weekdays;
