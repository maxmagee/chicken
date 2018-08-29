import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors } from '../../config/globalStyles';

const CircleButton = props => {
  const containerStyle = props.selected ? styles.containerSelected : styles.container;
  const textStyle = props.selected ? styles.textSelected : styles.text;

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.outerContainer}>
        <View style={containerStyle}>
          <Text style={textStyle}>{props.text}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

CircleButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  text: PropTypes.string.isRequired
};

const styles = EStyleSheet.create({
  outerContainer: {
    height: 50,
    width: 50
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 25,
    borderColor: colors.darkGray,
    borderWidth: 1
  },
  containerSelected: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: colors.red,
    borderWidth: 0
  },
  text: {
    color: colors.darkGray,
    fontFamily: 'Arial',
    fontSize: 14,
    fontWeight: 'bold'
  },
  textSelected: {
    color: colors.white,
    fontFamily: 'Arial',
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default CircleButton;
