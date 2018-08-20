import React from 'react';
import { Switch, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors } from '../../config/globalStyles';

const SettingsListItem = props => (
  <View style={styles.container}>
    <View style={styles.containerFlex}>
      <View style={styles.containerLeft}>
        <Text style={styles.label}>{props.label}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
      <View style={styles.containerRight}>
        <Switch
          style={styles.switch}
          value={props.value}
          onTintColor={colors.darkBlue}
          onValueChange={props.onValueChange}
        />
      </View>
    </View>
  </View>
);

SettingsListItem.propTypes = {
  description: PropTypes.string,
  label: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired
};

const styles = EStyleSheet.create({
  container: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    height: 100,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 25
  },
  containerFlex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  containerLeft: {
    flex: 3
  },
  containerRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  label: {
    color: colors.darkGray,
    fontFamily: 'Arial',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5
  },
  description: {
    color: colors.darkGray,
    fontFamily: 'Arial',
    fontSize: 12
  }
});

export default SettingsListItem;
