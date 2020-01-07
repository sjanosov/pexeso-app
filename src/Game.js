import React from "react";
import styled from "styled-components";
import GameBoard from "./components/GameBoard";
import CounterBoard from "./components/CounterBoard";
import { getStartState, onCardClick } from "./components/GameLogic";

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const H1Styled = styled.h1`
  font-size: 25px;
  color: #f1e8ed;
  letter-spacing: 5px;
  margin-bottom: 0;
`;

class Game extends React.Component {
  state = getStartState();

  mainSetState = inputState => {
    this.setState(inputState);
  };

  handleClick = (indexRow, indexCol) => {
    if (!this.state.allowClicking) return;
    this.setState(
      onCardClick(this.state, indexRow, indexCol, this.mainSetState)
    );
  };

  render() {
    return (
      <div>
        <Container>
          <H1Styled>MEMORY GAME</H1Styled>
        </Container>
        <Container>
          <GameBoard state={this.state} handleClick={this.handleClick} />
        </Container>
        <Container>
          <CounterBoard
            resetGame={() => this.setState(getStartState)}
            moves={this.state.moves}
            score={this.state.score}
          />
        </Container>
      </div>
    );
  }
}
export default Game;
