import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors, globalStyles } from '../config/globalStyles';

const AccountHeader = props => (
  <View style={styles.container}>
    <View style={styles.containerFlex}>
      <View style={styles.imageContainer}>
        <View style={styles.imageContainerFlex}>
          <MaterialCommunityIcons name="account-outline" size={50} color={colors.white} />
        </View>
      </View>
      <Text style={styles.fullNameText}>{props.fullName}</Text>
      <Text style={globalStyles.regularSmallText}>{props.email}</Text>
    </View>
  </View>
);

AccountHeader.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

const styles = EStyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    marginTop: -30,
    backgroundColor: 'transparent'
  },
  containerFlex: {
    flex: 1,
    alignItems: 'center'
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: colors.darkBlue
  },
  imageContainerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fullNameText: {
    color: colors.darkGray,
    fontFamily: 'Arial',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10
  },
  emailText: {
    color: colors.darkGray,
    marginTop: 5
  }
});

export default AccountHeader;
