import React from 'react';
import {TouchableOpacity, View} from 'react-native';

function GameBoardCell({
  row,
  column,
  children,
  currentPlayer,
  updateCell,
  setCurrentPlayer,
  value,
}) {
  let style = {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  };

  if (row === 0 && column === 0) {
    style = {...style, borderTopWidth: 0, borderLeftWidth: 0};
  } else if (row === 0 && column === 1) {
    style = {
      ...style,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    };
  } else if (row === 0 && column === 2) {
    style = {
      ...style,
      borderTopWidth: 0,
      borderRightWidth: 0,
    };
  } else if (row === 1 && column === 0) {
    style = {
      ...style,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    };
  } else if (row === 1 && column === 1) {
    style = {
      ...style,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    };
  } else if (row === 1 && column === 2) {
    style = {
      ...style,
      borderTopWidth: 0,
      borderRightWidth: 0,
    };
  } else if (row === 2 && column === 0) {
    style = {
      ...style,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderBottomWidth: 0,
    };
  } else if (row === 2 && column === 1) {
    style = {
      ...style,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    };
  } else if (row === 2 && column === 2) {
    style = {
      ...style,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    };
  }

  return (
    <TouchableOpacity
      onPress={() => {
        if (value === null) {
          updateCell(currentPlayer);
          setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
        }
      }}>
      <View style={style}>{children}</View>
    </TouchableOpacity>
  );
}
export default GameBoardCell;
