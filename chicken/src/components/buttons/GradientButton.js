import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, globalStyles } from '../../config/globalStyles';

const GradientButton = ({ label, onPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor="transparent">
    <LinearGradient
      colors={[colors.gradients.redButton.upper, colors.gradients.redButton.lower]}
      style={styles.gradientStyle}
    >
      <Text style={globalStyles.buttonLabel}>{label}</Text>
    </LinearGradient>
  </TouchableHighlight>
);

GradientButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
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
