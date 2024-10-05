/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import GameScreen from './components/gameScreen';
import MainScreen from './components/mainScreen';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {!currentPlayer ? (
        <MainScreen setCurrentPlayer={setCurrentPlayer} />
      ) : (
        <GameScreen
          setCurrentPlayer={setCurrentPlayer}
          currentPlayer={currentPlayer}
        />
      )}
    </SafeAreaView>
  );
}

export default App;
