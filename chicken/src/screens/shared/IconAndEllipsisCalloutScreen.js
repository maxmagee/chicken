import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors } from '../../config/globalStyles';

import EllipsisCallout from '../../components/EllipsisCallout';

const IconAndEllipsisCalloutScreen = props => {
  const ellipsisContainer = props.ellipsisContainer || styles.ellipsisContainer;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.iconContainer}>{props.icon}</View>
      </View>
      <EllipsisCallout
        containerStyle={ellipsisContainer}
        largeText={props.largeText}
        emphasizedText={props.emphasizedText}
      />
    </View>
  );
};

IconAndEllipsisCalloutScreen.propTypes = {
  icon: PropTypes.element.isRequired,
  largeText: PropTypes.string.isRequired,
  ellipsisContainer: PropTypes.number,
  emphasizedText: PropTypes.string.isRequired
};

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    backgroundColor: colors.lightBlue,
    height: 493,
    width: '100%'
  },
  iconContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ellipsisContainer: {
    backgroundColor: colors.white
  }
});

export default IconAndEllipsisCalloutScreen;
