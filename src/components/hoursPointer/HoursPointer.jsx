import styled from "styled-components";

const HoursPointer = ({pointer}) => {
  const HourPointer = styled.div`
   &:first-child {
      padding-top: 55px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    color: grey;
    padding-top: calc(23px + (100vh - 740px) / 10);
  `

  return (
    <HourPointer>{pointer}</HourPointer>
  );
};

export default HoursPointer;
