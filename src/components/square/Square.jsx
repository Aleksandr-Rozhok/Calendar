import styled from "styled-components";

const Row = () => {
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
        background-color: transparent;
        transition: background-color 0.5s;
        cursor: pointer;
    `

    return (
        <SquareContainer>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </SquareContainer>
    );
}

export default Row;