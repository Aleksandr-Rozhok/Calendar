import styled from "styled-components";

import Row from "../square/Square";
import HoursPointer from "../hoursPointer/HoursPointer";
import { useGetHoursPointersQuery } from '../../api/apiSlice.jsx';

const Sheet = () => {
    const SheetContainer = styled.div`
        display: flex;
        flex-direction: row;
        overflow-y: auto;
    `
    const TimeSection = styled.div`
        width: 10%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: column;
        padding-right: 15px;
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
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
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