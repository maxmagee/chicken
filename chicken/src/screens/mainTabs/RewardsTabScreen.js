import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors } from '../../config/globalStyles';

class RewardsTabScreen extends Component {
  render() {
    return (
      <View style={styles.errorContainer}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.errorText}>
          We're sorry! The Rewards page is not available yet. Please check again later.
        </Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
    padding: 20
  },
  errorText: {
    color: colors.white,
    fontFamily: 'Arial',
    fontSize: 24,
    fontWeight: 'normal',
    textAlign: 'center'
  }
});

export default RewardsTabScreen;
