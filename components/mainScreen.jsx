import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';

import TicTacToeElement from './tictactoe-elements';

function MainScreen({setCurrentPlayer}) {
  return (
    <View style={{flex: 1, backgroundColor: '#3A7BD5'}}>
      <Image
        style={{top: 1, left: 214}}
        source={require('../images/Zero.png')}
      />
      <Text
        style={{
          fontFamily: 'Montserrat',
          fontSize: 42,
          fontWeight: 'bold',
          color: '#FFFFFF',
          top: -95,
          left: 37,
        }}>
        TIC-TAC-TOE
      </Text>
      <Image
        style={{top: -273, left: -2}}
        source={require('../images/Cross.png')}
      />
      <Text
        style={{
          fontFamily: 'Montserrat',
          fontSize: 34,
          fontWeight: 'medium',
          color: '#FFFFFF',
          top: -245,
          left: 40,
        }}>
        Pick who goes first ?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 30,
          paddingRight: 30,
          gap: 25,
        }}>
        <TouchableOpacity
          onPress={() => {
            setCurrentPlayer('x');
          }}
          style={{flex: 1, top: -200}}>
          <TicTacToeElement name="x" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCurrentPlayer('o');
          }}
          style={{flex: 1, top: -200}}>
          <TicTacToeElement name="o" />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontFamily: 'Montserrat',
          fontSize: 23,
          fontWeight: 'medium',
          color: '#FFFFFF',
          top: -190,
          left: 100,
        }}>
        Made by Pranshu
      </Text>
    </View>
  );
}
export default MainScreen;
