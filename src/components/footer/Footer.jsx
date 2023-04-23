import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';

import {useDeleteEventMutation} from "../../api/apiSlice";
import { toggleVisibleBtn } from "../../actions/index";

const CalendarFooter = (id) => {
  const Footer = styled.header`
    display: flex;
    align-items: center;
    background-color: #f7f6f6;
    border-top: 1px solid #cdcdcd;
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
  `;
  const CurrentDate = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: red;
    cursor: pointer;
  `;
  const DeleteBtn = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: red;
    cursor: pointer;
  `;

const [deleteEvents] = useDeleteEventMutation();
const {visible, deleteId} = useSelector(state => state.deleteBtn);
const dispatch = useDispatch();

const deleteEvent = (id) => {
  const confirm = window.confirm("Do you really want to delete this event?")

  if (confirm) {
    deleteEvents(id);
    dispatch(toggleVisibleBtn(true));
  }
}

  return (
    <Footer>
      <CurrentDate>Today</CurrentDate>
      <DeleteBtn hidden={visible} onClick={() => deleteEvent(deleteId)} >Delete</DeleteBtn>
    </Footer>
  );
};

export default CalendarFooter;
