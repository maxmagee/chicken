import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, globalStyles } from '../../config/globalStyles';

const ShadowButton = ({ label, onPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor="transparent">
    <LinearGradient colors={[colors.white, colors.white]} style={styles.gradientStyle}>
      <Text style={[globalStyles.buttonLabel, styles.label]}>{label}</Text>
    </LinearGradient>
  </TouchableHighlight>
);

ShadowButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = EStyleSheet.create({
  gradientStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    height: 50,
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  label: {
    color: colors.red
  }
});

export default ShadowButton;
