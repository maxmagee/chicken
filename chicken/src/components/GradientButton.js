import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, globalStyles } from '../config/globalStyles';

const GradientButton = ({ label, onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <LinearGradient
      colors={[colors.gradients.redButton.upper, colors.gradients.redButton.lower]}
      style={styles.gradientStyle}
    >
      <Text style={globalStyles.buttonLabel}>{label}</Text>
    </LinearGradient>
  </TouchableHighlight>
);

GradientButton.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func
};

const styles = EStyleSheet.create({
  gradientStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    height: 50
  }
});

export default GradientButton;
