import React, { Component } from 'react';
import { Alert, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import backgroundImage from '../../../assets/backgrounds/shake-and-fruit.jpg';
import { globalStyles } from '../../config/globalStyles';

import GeneralizedSignedOutScreen from '../shared/GeneralizedSignedOutScreen';

class RewardsSignedOutScreen extends Component {
  handleTermsPress = () => {
    Alert.alert(
      `We're Sorry!`,
      `Terms & conditions are not available yet. Please check again later.`
    );
  };

  render() {
    return (
      <GeneralizedSignedOutScreen
        callout="Edit and save your account settings"
        image={backgroundImage}
        mainText={`Personalize your account and settings.`} // eslint-disable-line
        childStyles={styles.linkContainer}
      >
        <TouchableOpacity onPress={this.handleTermsPress}>
          <Text style={globalStyles.link}>Terms & conditions</Text>
        </TouchableOpacity>
      </GeneralizedSignedOutScreen>
    );
  }
}

RewardsSignedOutScreen.propTypes = {
  navigation: PropTypes.object
};

const styles = EStyleSheet.create({
  linkContainer: {
    marginBottom: -43
  }
});

export default RewardsSignedOutScreen;
