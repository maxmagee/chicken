import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import { EvilIcons } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors } from '../../config/globalStyles';

const SimpleNavListItem = props => (
  <TouchableHighlight onPress={props.onPress} underlayColor={colors.gray}>
    <View style={styles.container}>
      <View style={styles.containerFlex}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{props.label}</Text>
        </View>
        <View style={styles.rightContainer}>
          <EvilIcons name="chevron-right" size={30} color={colors.grayChevron} />
        </View>
      </View>
    </View>
  </TouchableHighlight>
);

SimpleNavListItem.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = EStyleSheet.create({
  container: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 10,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1
  },
  containerFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  labelContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  labelText: {
    color: colors.darkGray,
    fontFamily: 'Arial',
    fontSize: 17
  }
});

export default SimpleNavListItem;
