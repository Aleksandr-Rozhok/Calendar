import styled from "styled-components";

const CalendarFooter = () => {
  const Footer = styled.header`
    display: flex;
    align-items: center;
  `;
  const CurrentDate = styled.p`
    font-weight: 400;
    color: red;
  `;

  return (
    <Footer>
      <CurrentDate>Today</CurrentDate>
    </Footer>
  );
};

export default CalendarFooter;
