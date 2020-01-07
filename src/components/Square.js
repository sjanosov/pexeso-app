import React from "react";
import styled from "styled-components";
// import { flipInX } from "react-animations";
// import { flipInX } from "react-animated-css";

//obalit do divu kazdy SquareBack, SqureFront
const SquareStyled = styled.div`
  background-color: #f1e8ed;
  border: 1px solid grey;
  margin: 2px 2px;
  padding: 0;
  width: 13vw;
  height: 30vh;
  text-align: center;
  position: relative;

  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const SquareBack = styled.div`
  background-color: #f1e8ed;
  border: 1px solid grey;
  padding: 0;
  width: 13vw;
  height: 30vh;
  display: ${props => (props.clicked ? "none" : "block")};
`;

const SquareFront = styled.img`
  background-color: #f1e8ed;
  border: 1px solid grey;
  padding: 0;
  width: 13vw;
  height: 30vh;

  display: ${props => (props.clicked ? "block" : "none")};
`;

// const FlipInX = styled.div`
//   animation: 2s ${keyframes`${flipInX}`} infinite;
// `;

const Square = props => (
  <SquareStyled onClick={props.onClick}>
    <SquareBack clicked={props.value.clicked} />
    <SquareFront
      clicked={props.value.clicked}
      alt={props.value.name}
      src={props.value.image}
    />
  </SquareStyled>
);

export default Square;
