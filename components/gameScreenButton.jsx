import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function GameScreenButton({setCurrentPlayer}) {
  return (
    <View>
      <View
        style={{
          height: 60,
          width: 160,
          borderWidth: 3,
          borderColor: '#FFFFFF',
          borderRadius: 50,
          top: 300,
          left: 110,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat',
            fontSize: 26,
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}>
          Restart
        </Text>
      </View>
    </View>
  );
}
export default GameScreenButton;
