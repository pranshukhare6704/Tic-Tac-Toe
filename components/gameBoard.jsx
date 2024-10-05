import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import TicTacToeElement from './tictactoe-elements';
import GameBoardRow from './gameboardrow';
import GameBoardCell from './gameBoardCell';
import WinnerScreen from './winnerScreen';

function GameBoard({currentPlayer, setCurrentPlayer}) {
  const [winner, setWinner] = useState(null);

  const [cell1, setCell1] = useState(null);
  const [cell2, setCell2] = useState(null);
  const [cell3, setCell3] = useState(null);
  const [cell4, setCell4] = useState(null);
  const [cell5, setCell5] = useState(null);
  const [cell6, setCell6] = useState(null);
  const [cell7, setCell7] = useState(null);
  const [cell8, setCell8] = useState(null);
  const [cell9, setCell9] = useState(null);

  useEffect(() => {
    WinningCondition();
  });

  function WinningCondition() {
    if (
      (cell1 !== null &&
        cell2 !== null &&
        cell3 !== null &&
        cell1 === cell2 &&
        cell2 === cell3) ||
      (cell4 !== null &&
        cell5 !== null &&
        cell6 !== null &&
        cell4 === cell5 &&
        cell5 === cell6) ||
      (cell7 !== null &&
        cell8 !== null &&
        cell9 !== null &&
        cell7 === cell8 &&
        cell8 === cell9) ||
      (cell1 !== null &&
        cell4 !== null &&
        cell7 !== null &&
        cell1 === cell4 &&
        cell4 === cell7) ||
      (cell2 !== null &&
        cell5 !== null &&
        cell8 !== null &&
        cell2 === cell5 &&
        cell5 === cell8) ||
      (cell3 !== null &&
        cell6 !== null &&
        cell9 !== null &&
        cell3 === cell6 &&
        cell6 === cell9) ||
      (cell1 !== null &&
        cell5 !== null &&
        cell9 !== null &&
        cell1 === cell5 &&
        cell5 === cell9) ||
      (cell3 !== null &&
        cell5 !== null &&
        cell7 !== null &&
        cell3 === cell5 &&
        cell5 === cell7)
    ) {
      setWinner(currentPlayer === 'x' ? 'o' : 'x');
    }
  }

  return (
    <View>
      {winner ? (
        <WinnerScreen winner={winner} />
      ) : (
        <View>
          <GameBoardRow>
            <GameBoardCell
              row={0}
              column={0}
              updateCell={setCell1}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              value={cell1}>
              {cell1 ? <TicTacToeElement name={cell1} /> : ''}
            </GameBoardCell>
            <GameBoardCell
              row={0}
              column={1}
              updateCell={setCell2}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              value={cell2}>
              {cell2 ? <TicTacToeElement name={cell2} /> : ''}
            </GameBoardCell>
            <GameBoardCell
              row={0}
              column={2}
              updateCell={setCell3}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              value={cell3}>
              {cell3 ? <TicTacToeElement name={cell3} /> : ''}
            </GameBoardCell>
          </GameBoardRow>

          <GameBoardRow>
            <GameBoardCell
              row={1}
              column={0}
              updateCell={setCell4}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              value={cell4}>
              {cell4 ? <TicTacToeElement name={cell4} /> : ''}
            </GameBoardCell>
            <GameBoardCell
              row={1}
              column={1}
              updateCell={setCell5}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              value={cell5}>
              {cell5 ? <TicTacToeElement name={cell5} /> : ''}
            </GameBoardCell>
            <GameBoardCell
              row={1}
              column={2}
              updateCell={setCell6}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              value={cell6}>
              {cell6 ? <TicTacToeElement name={cell6} /> : ''}
            </GameBoardCell>
          </GameBoardRow>

          <GameBoardRow>
            <GameBoardCell
              row={2}
              column={0}
              updateCell={setCell7}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              value={cell7}>
              {cell7 ? <TicTacToeElement name={cell7} /> : ''}
            </GameBoardCell>
            <GameBoardCell
              row={2}
              column={1}
              updateCell={setCell8}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              value={cell8}>
              {cell8 ? <TicTacToeElement name={cell8} /> : ''}
            </GameBoardCell>
            <GameBoardCell
              row={2}
              column={2}
              updateCell={setCell9}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              value={cell9}>
              {cell9 ? <TicTacToeElement name={cell9} /> : ''}
            </GameBoardCell>
          </GameBoardRow>
        </View>
      )}
    </View>
  );
}
export default GameBoard;
