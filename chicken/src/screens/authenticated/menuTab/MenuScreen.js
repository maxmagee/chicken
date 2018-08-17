import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MenuScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Authenticated Menu Screen</Text>
      </View>
    );
  }
}

export default MenuScreen;
