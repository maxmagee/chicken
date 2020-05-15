import React from 'react';
import { Text, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, globalStyles } from '../config/globalStyles';

const EllipsisCallout = props => {
  const textColor = props.textColor || colors.darkGray;

  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={styles.largeTextContainer}>
        <Text style={[globalStyles.callout, styles.largeText, { color: textColor }]}>
          {props.largeText}
        </Text>
      </View>
      <View style={styles.ellipsisContainer}>
        <Text style={[styles.ellipsisText, { color: textColor }]}>. . .</Text>
      </View>
      <View style={styles.emphasizedTextContainer}>
        <Text
          style={[
            globalStyles.calloutEmphasized,
            styles.emphasizedText,
            props.emphasizedTextStyle,
            { color: textColor }
          ]}
        >
          {props.emphasizedText}
        </Text>
      </View>
    </View>
  );
};

EllipsisCallout.propTypes = {
  containerStyle: ViewPropTypes.style,
  emphasizedText: PropTypes.string.isRequired,
  emphasizedTextStyle: Text.propTypes.style,
  largeText: PropTypes.string.isRequired,
  textColor: PropTypes.string
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
    textAlign: 'center'
  },
  ellipsisContainer: {
    paddingVertical: 10
  },
  ellipsisText: {
    fontFamily: 'Times New Roman',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -14 // centers the '...' in the middle container
  },
  emphasizedTextContainer: {
    width: 245,
    alignSelf: 'center'
  },
  emphasizedText: {
    fontSize: 13,
    lineHeight: 20
  }
});

export default EllipsisCallout;
