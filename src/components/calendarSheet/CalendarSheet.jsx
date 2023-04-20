import styled from "styled-components";

import Row from "../square/Square";
import HoursPointer from "../hoursPointer/HoursPointer";
import { useGetHoursPointersQuery } from '../../api/apiSlice.jsx';

const Sheet = () => {
    const SheetContainer = styled.div`
        height: 80%;
        display: flex;
        flex-direction: row;
    `
    const TimeSection = styled.div`
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `
    const CellsSection = styled.div`
        width: 100%;
    `

    const {
        data: hoursPointers = [],
    } = useGetHoursPointersQuery();

    const renderHoursPointersList = (arr) => {
        return arr.map(({id, ...props}) => {
            return <HoursPointer key={id} {...props}/>
        })
    }

  const elementsOfWeek = renderHoursPointersList(hoursPointers.slice());

    return (
        <SheetContainer>
            <TimeSection>
                {elementsOfWeek}
            </TimeSection>
            <CellsSection>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
            </CellsSection>
        </SheetContainer>
    )
}

export default Sheet