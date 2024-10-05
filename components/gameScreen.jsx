import React from 'react';
import {Text, View, Button} from 'react-native';
import GameBoard from './gameBoard';

function GameScreen({setCurrentPlayer, currentPlayer}) {
  function handleRestart() {
    setCurrentPlayer(null);
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#3A7BD5',
      }}>
      <Text
        style={{
          fontFamily: 'Montserrat',
          fontSize: 36,
          fontWeight: 'bold',
          color: '#FFFFFF',
          top: 155,
          left: 65,
        }}>
        Player {currentPlayer} Turn
      </Text>
      <View
        style={{
          width: 324,
          height: 324,
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          alignItems: 'center',
          top: 238,
          left: 30,
          borderRadius: 20,
        }}>
        <GameBoard
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
        />
      </View>
      <View style={{top: 300, width: 160, left: 110}}>
        <Button title="Restart" onPress={handleRestart} />
      </View>
      <Text
        style={{
          fontFamily: 'Montserrat',
          fontSize: 23,
          fontWeight: 'bold',
          color: '#FFFFFF',
          top: 315,
          left: 100,
        }}>
        Made by Pranshu
      </Text>
    </View>
  );
}
export default GameScreen;
