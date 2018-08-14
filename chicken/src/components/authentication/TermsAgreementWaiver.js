import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, globalStyles } from '../../config/globalStyles';

const TermsAgreementWaiver = props => {
  const handleTermsPress = () => {
    StatusBar.setBarStyle('light-content');
    props.navigation.navigate('TermsAndConditionsNavigator');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerFlex}>
        <View style={styles.termsTextContainer}>
          <Text style={[globalStyles.regularSmallText, styles.termsText]}>
            By signing in, you agree to Chick-fil-A’s{' '}
            <TouchableOpacity onPress={handleTermsPress}>
              <Text
                style={[
                  globalStyles.regularSmallText,
                  globalStyles.termsText,
                  { color: colors.darkBlue }
                ]}
              >
                Terms of Service and Privacy Notice.
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

TermsAgreementWaiver.propTypes = {
  navigation: PropTypes.object.isRequired
};

const styles = EStyleSheet.create({
  container: {
    height: 100,
    paddingTop: 14
  },
  containerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  termsTextContainer: {
    width: 195
  },
  termsText: {
    textAlign: 'center'
  }
});

export default TermsAgreementWaiver;
