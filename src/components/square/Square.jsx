import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

import {useGetEventsQuery, useDeleteEventsMutation, useCreateEventMutation} from "../../api/apiSlice";

const Row = ({numberOfRow}) => {
    const SquareContainer = styled.div`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-top: 1px solid grey;
        &:first-child {
            border-top: none;
        }
    `
    const Square = styled.div`
        &:hover {
            background-color:rgba(183, 224, 245, 0.78);
        };
        width: 100%;
        height: 65px;
        border-right: 1px solid grey;
        transition: background-color 0.5s;
        cursor: pointer;
    `

    const {data: events = []} = useGetEventsQuery();
    const [deleteEvents] = useDeleteEventsMutation();
    const [createEvent] = useCreateEventMutation();

    const deleteEvent = (item) => {
        item.style.border = "3px solid red"; 

        deleteEvent();
    }

    const addEvent = (time, day, id) => {
        const confirm = window.confirm(`Want to add an event at ${time}?`)
        
        if (confirm) {
            createEvent({
                "time": time,
                "day": day,
                "id": id
              });
        }
    }

    const filterEvents = (data) => {
        const eventData = {};

        data.forEach(item => {
            if (!eventData[item.time]) {
                eventData[item.time] = [item];
            } else {
                eventData[item.time].push(item); 
            }
        }) 

        return eventData;
    }

    const allEvents = filterEvents(events);

    const renderRow = (time) => {
        const result = [];

        if (allEvents[time]) {
            const currEvents = allEvents[time];
            const currDay = {};

            currEvents.forEach(item => {
                if (!currDay[item.day]) {
                    currDay[item.day] = item.id;
                }
            })

            for (let i = 0; i < 7; i++) {
                if (currDay[i]) {
                    result.push(<Square
                         style={{backgroundColor: "rgba(183, 224, 245, 0.78)"}}
                         onClick={(e) => deleteEvent(e.target)}
                         time={time}
                         id={currDay[i].id}
                         key={currDay[i].id}
                         day={i} />)
                } else {
                    result.push(<Square 
                        time={time}
                        onClick={(e) => addEvent(time, i, e.target.id)}
                        day={i} 
                        id={uuidv4()}
                        key={uuidv4()}/>)
                }
            }
        } else {
            for (let i = 0; i < 7; i++) {
                result.push(<Square 
                    id={uuidv4()}
                    time={time}
                    onClick={(e) => addEvent(time, i, e.target.id)}
                    day={i} 
                    key={uuidv4()}/>)
            }
        }

        return result;
    }

    return (
        <SquareContainer>
            {renderRow(numberOfRow)}
        </SquareContainer>
    );
}

export default Row;