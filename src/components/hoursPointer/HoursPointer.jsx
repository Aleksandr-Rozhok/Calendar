import styled from "styled-components";

const HoursPointer = ({pointer}) => {
  const HourPointer = styled.div`
   &:first-child {
      padding-top: 83%;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    color: grey;
    padding-top: 70%;
  `

  return (
    <HourPointer>{pointer}</HourPointer>
  );
};

export default HoursPointer;
