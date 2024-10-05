import React, {Component} from 'react';
import {View, Image} from 'react-native';

class TicTacToeElement extends Component {
  render() {
    const imageUrl =
      this.props.name === 'x'
        ? require('../images/redCross.png')
        : require('../images/greenZero.png');
    return (
      <View
        style={{
          backgroundColor: '#FFFFFF',
          minHeight: 20,
          minWidth: 20,
          width: '100%',
          aspectRatio: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
        }}>
        <Image
          style={{
            width: '80%',
            resizeMode: 'contain',
          }}
          source={imageUrl}
        />
      </View>
    );
  }
}
export default TicTacToeElement;
