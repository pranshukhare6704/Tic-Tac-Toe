import React from 'react';
import {View} from 'react-native';

function GameBoardRow({children}) {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      {children}
    </View>
  );
}
export default GameBoardRow;
