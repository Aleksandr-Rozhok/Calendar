import styled from "styled-components";

const HoursPointer = ({pointer}) => {
  const HourPointer = styled.div`
    color: grey;
  `

  return (
    <HourPointer>{pointer}</HourPointer>
  );
};

export default HoursPointer;
