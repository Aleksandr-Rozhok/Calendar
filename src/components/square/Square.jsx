import styled from "styled-components";

const Row = () => {
    const SquareContainer = styled.div`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-top: 1px solid grey;
        &:last-child {
            border-bottom: 1px solid grey;
        }
        &:first-child {
            border-top: none;
        }
    `
    const Square = styled.div`
        width: 12.5%;
        height: 65px;
        border-right: 1px solid grey;
        background-color: transparent;
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