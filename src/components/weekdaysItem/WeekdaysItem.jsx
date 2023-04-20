import styled from "styled-components";

const WeekdaysItem = ({dayOfWeek, numberOfMonth}) => {
  const WeekdaysItemContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
  `
  const DayOfWeek = styled.div`
    font-weight: 600;
    font-size: 14px;
  `

  const NumberOfMonth = styled.div`
    font-weight: 600;
    font-size: 24px;
  `

  return (
    <WeekdaysItemContainer>
      <DayOfWeek>{dayOfWeek}</DayOfWeek>
      <NumberOfMonth>{numberOfMonth}</NumberOfMonth>
    </WeekdaysItemContainer>
  );
};

export default WeekdaysItem;
