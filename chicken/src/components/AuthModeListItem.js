import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors } from '../config/globalStyles';

const AuthModeListItem = props => (
  <TouchableHighlight style={{ flex: 1 }} onPress={props.onPress} underlayColor={colors.gray}>
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.imageContainer}>
          <Image source={props.iconImage} height={40} width={40} />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{props.labelText}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <EvilIcons name="chevron-right" size={40} color={colors.darkBlue} />
      </View>
    </View>
  </TouchableHighlight>
);

AuthModeListItem.propTypes = {
  iconImage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomColor: colors.gray,
    borderBottomWidth: 2,
    paddingLeft: 38,
    paddingRight: 25
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  imageContainer: {
    height: 40,
    width: 40
  },
  labelContainer: {
    marginLeft: 34
  },
  labelText: {
    color: colors.darkBlue,
    fontFamily: 'Arial',
    fontSize: 15,
    fontWeight: 'bold'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default AuthModeListItem;
