import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, globalStyles } from '../config/globalStyles';

const EllipsisCallout = props => (
  <View style={[styles.container, props.containerStyle]}>
    <View style={styles.largeTextContainer}>
      <Text style={[globalStyles.callout, styles.largeText]}>{props.largeText}</Text>
    </View>
    <View style={styles.ellipsisContainer}>
      <Text style={styles.ellipsisText}>. . .</Text>
    </View>
    <View style={styles.emphasizedTextContainer}>
      <Text style={[globalStyles.calloutEmphasized, styles.emphasizedText]}>
        {props.emphasizedText}
      </Text>
    </View>
  </View>
);

EllipsisCallout.propTypes = {
  containerStyle: PropTypes.number,
  largeText: PropTypes.string.isRequired,
  emphasizedText: PropTypes.string.isRequired
};

const styles = EStyleSheet.create({
  container: {
    padding: 20
  },
  largeTextContainer: {
    width: 270,
    alignSelf: 'center'
  },
  largeText: {
    color: colors.darkGray,
    textAlign: 'center'
  },
  ellipsisContainer: {
    paddingVertical: 10
  },
  ellipsisText: {
    color: colors.darkGray,
    fontFamily: 'Times New Roman',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -14 // centers the '...' in the middle container
  },
  emphasizedTextContainer: {},
  emphasizedText: {
    color: colors.darkGray,
    fontSize: 13
  }
});

export default EllipsisCallout;
