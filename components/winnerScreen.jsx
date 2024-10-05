import React from 'react';
import {Text, View} from 'react-native';

function WinnerScreen({winner}) {
  return (
    <View>
      <Text style={{color: 'black'}}>
        Congratulations! The Winner is {winner}
      </Text>
    </View>
  );
}
export default WinnerScreen;
