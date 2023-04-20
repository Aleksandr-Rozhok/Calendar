import React from "react";
import styled from "styled-components";

const MonthItem = ({monthAndYear}) => {
  const MonthItemContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 15px;
  `
  const CurrentMonthAndYear = styled.div`
    font-weight: 600;
  `

  const ArrowButton = styled.button`
    color: red;
    font-weight: 400;
    font-size: 24px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  `

  return (
    <MonthItemContainer>
      <ArrowButton>&lt;</ArrowButton>
      <CurrentMonthAndYear>{monthAndYear.month} {monthAndYear.year}</CurrentMonthAndYear>
      <ArrowButton>&gt;</ArrowButton>
    </MonthItemContainer>
  );
};

export default MonthItem;
