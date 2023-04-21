import styled from "styled-components";

const CalendarFooter = () => {
  const Footer = styled.header`
    display: flex;
    align-items: center;
    background-color: #f7f6f6;
    border-top: 1px solid #cdcdcd;
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    align-items: center;
  `;
  const CurrentDate = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: red;
    cursor: pointer;
  `;
  const DeleteBtn = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: red;
    cursor: pointer;
  `;

  return (
    <Footer>
      <CurrentDate>Today</CurrentDate>
      <DeleteBtn >Delete</DeleteBtn>
    </Footer>
  );
};

export default CalendarFooter;
