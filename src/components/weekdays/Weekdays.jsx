import React from "react";
import styled from "styled-components";

import { useGetWeekdaysQuery, useGetMonthQuery } from '../../api/apiSlice.jsx';
import Spinner from '../spinner/Spinner';
import WeekdaysItem from "../weekdaysItem/WeekdaysItem.jsx";

const Weekdays = () => {
  const LoadingError = styled.h5`
    color: red;
  `
  const ListOfDate = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `

  const {
      data: daysOfWeek = [],
      isLoading,
      isError,
  } = useGetWeekdaysQuery(10);

  const {
    data: month = ''
  } = useGetMonthQuery();

  if (isLoading) {
    return <Spinner/>;
  } else if (isError) {
    return <LoadingError>Ошибка загрузки</LoadingError>
  }

  const renderDateList = (arr) => {
    if (arr.length === 0) {
        return <h5 className="text-center mt-5">Героев пока нет</h5>
    }

    return arr.map(({id, ...props}) => {
        return <WeekdaysItem key={id} {...props}/>
    })
}

const elementsOfWeek = renderDateList(daysOfWeek.slice());
  return (
    <>
      <ListOfDate>
        {elementsOfWeek}
      </ListOfDate>
    </>
  );
};

export default Weekdays;
