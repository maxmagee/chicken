import React, { Component } from 'react';
import { Alert, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors } from '../../config/globalStyles';
import iconEmail from '../../../assets/icons/icon-email.png';
import iconFacebook from '../../../assets/icons/icon-facebook.png';
import iconGoogle from '../../../assets/icons/icon-google.png';

import AuthModeListItem from '../../components/AuthModeListItem';

class AuthModeScreen extends Component {
  handleFacebookPress = () => {
    Alert.alert(
      `We're Sorry!`,
      `Facebook authentication is not available yet. Please check again later.`
    );
  };

  handleGooglePress = () => {
    Alert.alert(
      `We're Sorry!`,
      `Google authentication is not available yet. Please check again later.`
    );
  };

  handleEmailPress = () => {
    Alert.alert(
      `We're Sorry!`,
      `Email authentication is not available yet. Please check again later.`
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTop} />
        <View style={styles.containerBottom}>
          <AuthModeListItem
            iconImage={iconFacebook}
            labelText="Facebook"
            onPress={this.handleFacebookPress}
          />
          <AuthModeListItem
            iconImage={iconGoogle}
            labelText="Google"
            onPress={this.handleGooglePress}
          />
          <AuthModeListItem
            iconImage={iconEmail}
            labelText="Email"
            onPress={this.handleEmailPress}
          />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>bottom</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  containerTop: {
    flex: 1,
    backgroundColor: colors.lightBlue
  },
  containerBottom: {
    flex: 1,
    backgroundColor: colors.white
  }
});

export default AuthModeScreen;
