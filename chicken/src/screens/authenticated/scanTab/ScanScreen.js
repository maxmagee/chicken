import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ScanScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Authenticated Scan Screen</Text>
      </View>
    );
  }
}

export default ScanScreen;
