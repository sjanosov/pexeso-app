import React from "react";
import styled from "styled-components";
import Square from "./Square";
// import { objectName } from "./GameLogic";

const GameBoardStyled = styled.section`
  justify-content: center;
  display: flex;
  padding: 40px;
`;
const GameBoard = props => {
  return (
    <GameBoardStyled>
      <table>
        <tbody>
          {props.state.board.map((row, indexRow) => (
            <tr key={indexRow}>
              {row.map((col, indexCol) => (
                <td key={indexCol}>
                  <Square
                    onClick={() => props.handleClick(indexRow, indexCol)}
                    value={col}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </GameBoardStyled>
  );
};

export default GameBoard;
