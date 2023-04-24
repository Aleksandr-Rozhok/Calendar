import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import {useGetEventsQuery, useCreateEventMutation} from "../../api/apiSlice";
import {toggleVisibleBtn , getDeleteId, toggleCellColor} from "../../actions/index";
import { useEffect } from "react";

const Row = ({numberOfRow}) => {
    const {data: events = []} = useGetEventsQuery();
    const [createEvent] = useCreateEventMutation();
    const {currDay, currTime} = useSelector(state => state.deleteBtn);
    const dispatch = useDispatch();

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

    useEffect(() => {
        filterEvents(events);
    }, [events])

    const deleteEvent = (id, day, time) => {
        dispatch(toggleCellColor({day, time}));
        dispatch(getDeleteId(id));
        dispatch(toggleVisibleBtn(false));
    }

    const addEvent = (time, day, id) => {
        dispatch(toggleVisibleBtn(true));
        const confirm = window.confirm(`Want to add an event at ${time}:00?`)
        
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
        const currEvents = allEvents[time];

        if (allEvents[time]) {
            const pointDay = {};

            currEvents.forEach(item => {
                if (!pointDay[item.day]) {
                    pointDay[item.day] = item.id;
                }
            })

            for (let i = 1; i < 8; i++) {
                let currDayOfWeek = 0;
                i === 7 ? currDayOfWeek = 0 : currDayOfWeek = i;
                if (pointDay[currDayOfWeek] || pointDay[currDayOfWeek] === 0) {
                    result.push(<Square
                         style={{backgroundColor: `${currDay === currDayOfWeek && currTime === time ? "red" : "rgba(183, 224, 245, 0.78)"}`}}
                         onClick={() => deleteEvent(pointDay[currDayOfWeek], currDayOfWeek, time)}
                         time={time}
                         id={pointDay[currDayOfWeek]}
                         key={pointDay[currDayOfWeek]}
                         day={currDayOfWeek}
                          />)
                } else {
                    result.push(<Square 
                        time={time}
                        onClick={(e) => addEvent(time, currDayOfWeek, e.target.id)}
                        day={currDayOfWeek} 
                        id={uuidv4()}
                        key={uuidv4()}/>)
                }
            }
        } else {
            for (let i = 1; i < 8; i++) {
                let currDayOfWeek = 0;
                i === 7 ? currDayOfWeek = 0 : currDayOfWeek = i;
                result.push(<Square 
                    id={uuidv4()}
                    time={time}
                    onClick={(e) => addEvent(time, currDayOfWeek, e.target.id)}
                    day={currDayOfWeek} 
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