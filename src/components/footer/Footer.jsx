import styled from "styled-components";

const CalendarFooter = () => {
  const Footer = styled.header`
    display: flex;
    align-items: center;
    background-color: #f7f6f6;
    border-top: 1px solid #cdcdcd;
    padding-left: 10%;
  `;
  const CurrentDate = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: red;
  `;

  return (
    <Footer>
      <CurrentDate>Today</CurrentDate>
    </Footer>
  );
};

export default CalendarFooter;
