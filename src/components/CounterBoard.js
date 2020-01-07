import React from "react";
import styled from "styled-components";

const CounterContainer = styled.div`
  width: 100%;
  background-color: #9fa2b2;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  padding: 20px;
`;

const CounterButtonStyled = styled.button`
  color: black;
  justify-content: center;
  display: flex;
  flex-direction: row;
  background: white;
  margin: 10px;
  width: 100px;
  height: 30px;
  border: 1px solid black;
  font-size: 20px;
`;

const CounterTextStyled = styled.p`
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin: 5px;
  font-size: 15px;
`;

const CounterSectionStyled = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const CounterBoard = props => {
  return (
    <CounterContainer>
      <CounterSectionStyled>
        <CounterButtonStyled>
          <b>{props.moves}</b>
        </CounterButtonStyled>
        <CounterTextStyled>Moves</CounterTextStyled>
      </CounterSectionStyled>
      <CounterSectionStyled>
        <CounterButtonStyled>
          <b>{props.score}</b>
        </CounterButtonStyled>
        <CounterTextStyled>Score</CounterTextStyled>
      </CounterSectionStyled>
      <CounterSectionStyled>
        <CounterButtonStyled onClick={props.resetGame}>
          <b>X</b>
        </CounterButtonStyled>
        <CounterTextStyled>Give up game!</CounterTextStyled>
      </CounterSectionStyled>
    </CounterContainer>
  );
};

export default CounterBoard;
