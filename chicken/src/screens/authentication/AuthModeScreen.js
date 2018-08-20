import React, { Component } from 'react';
import { Alert, Image, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors } from '../../config/globalStyles';
import iconEmail from '../../../assets/icons/icon-email.png';
import iconFacebook from '../../../assets/icons/icon-facebook.png';
import iconGoogle from '../../../assets/icons/icon-google.png';
import sun from '../../../assets/images/sun.png';

import AuthModeListItem from '../../components/authentication/AuthModeListItem';
import EllipsisCallout from '../../components/EllipsisCallout';
import TermsAgreementWaiver from '../../components/authentication/TermsAgreementWaiver';

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
    this.props.navigation.navigate('EmailSignIn');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <View style={styles.imageContainer}>
            <Image source={sun} height={160} width={160} />
          </View>
          <EllipsisCallout
            largeText="Let's get started"
            emphasizedText="SIGN IN TO CHICK-FIL-A ONE"
          />
        </View>
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
          <TermsAgreementWaiver navigation={this.props.navigation} />
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
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerBottom: {
    flex: 1,
    backgroundColor: colors.white
  }
});

export default AuthModeScreen;
