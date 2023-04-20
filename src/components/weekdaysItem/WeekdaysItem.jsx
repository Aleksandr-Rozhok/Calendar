import styled from "styled-components";

const WeekdaysItem = ({dayOfWeek, numberOfMonth, handleActiveElem, isActive}) => {
  const WeekdaysItemContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
  `;
  const DayOfWeek = styled.div`
    font-weight: 600;
    font-size: 14px;
  `;

  const NumberOfMonth = styled.div`
    &:hover {
      background-color: #cfc7c7;
    };
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 24px;
    border-radius: 100%;
    transition: background-color 0.5s;
    background-color: ${isActive ? "red" : "trasparent"};
    color: ${isActive ? "white" : "black"};
    cursor: pointer;
  `;

  return (
    <WeekdaysItemContainer>
      <DayOfWeek>{dayOfWeek}</DayOfWeek>
      <NumberOfMonth onClick={handleActiveElem}>{numberOfMonth}</NumberOfMonth>
    </WeekdaysItemContainer>
  )
};

export default WeekdaysItem;
