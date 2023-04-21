import styled from "styled-components";

const MonthItem = ({month, year}) => {
  const MonthItemContainer = styled.div`
    display: flex;
    margin: 0 5% 0 10%;
    justify-content: space-between;
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
  const allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <MonthItemContainer>
      <ArrowButton>&lt;</ArrowButton>
      <CurrentMonthAndYear>{allMonth[month]} {year}</CurrentMonthAndYear>
      <ArrowButton>&gt;</ArrowButton>
    </MonthItemContainer>
  );
};

export default MonthItem;
