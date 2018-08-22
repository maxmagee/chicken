import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, globalStyles } from '../../config/globalStyles';

const ComingSoonScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Coming Soon</Text>
  </View>
);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
    borderWidth: 0
  },
  text: {
    color: colors.white,
    fontFamily: globalStyles.callout.fontFamily,
    fontSize: globalStyles.callout.fontSize,
    fontWeight: globalStyles.callout.fontWeight
  }
});

export default ComingSoonScreen;
