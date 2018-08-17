import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MyOrderScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Authenticated My Order Screen</Text>
      </View>
    );
  }
}

export default MyOrderScreen;
