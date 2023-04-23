import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

import Row from "../square/Square";
import HoursPointer from "../hoursPointer/HoursPointer";

const Sheet = () => {
    const SheetContainer = styled.div`
        display: flex;
        flex-direction: row;
        overflow-y: auto;
        flex-grow: 1;
    `
    const TimeSection = styled.div`
        width: 10%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: column;
        padding-right: 15px;
        flex-grow: 1;
    `
    const CellsSection = styled.div`
        width: 100%;
        flex-grow: 1;
    `

    const createHoursPointer = () => {
        const hoursPointers = [];

        for (let i = 1; i < 24; i++) {
            if (i.toString().length === 1) {
                hoursPointers.push(`0${i}:00`);
            } else {
                hoursPointers.push(`${i}:00`);
            }
        }

        return hoursPointers;
    }

    const renderHoursPointersList = (arr) => {
        return arr.map(pointer => {
            return <HoursPointer key={uuidv4()} pointer={pointer}/>
        })
    }

    const renderRows = () => {
        const allRows = [];

        for (let i = 0; i < 24; i++) {
            allRows.push(<Row numberOfRow={i} key={uuidv4()} />)
        }

        return allRows;
    }

  const elementsOfWeek = renderHoursPointersList(createHoursPointer());

    return (
        <SheetContainer>
            <TimeSection>
                {elementsOfWeek}
            </TimeSection>
            <CellsSection>
                {renderRows()}
            </CellsSection>
        </SheetContainer>
    )
}

export default Sheet