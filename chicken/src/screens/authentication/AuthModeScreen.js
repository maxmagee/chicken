import React, { Component } from 'react';
import { Alert, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, globalStyles } from '../../config/globalStyles';
import iconEmail from '../../../assets/icons/icon-email.png';
import iconFacebook from '../../../assets/icons/icon-facebook.png';
import iconGoogle from '../../../assets/icons/icon-google.png';
import sun from '../../../assets/images/sun.png';

import AuthModeListItem from '../../components/AuthModeListItem';
import EllipsisCallout from '../../components/EllipsisCallout';

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

  handleTermsPress = () => {
    StatusBar.setBarStyle('light-content');
    this.props.navigation.navigate('TermsAndConditionsNavigator');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={[styles.containerTop, { alignItems: 'center', justifyContent: 'center' }]}>
            <Image source={sun} height={160} width={160} />
          </View>
          <EllipsisCallout
            backgroundColor={colors.lightBlue}
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
          <View style={styles.containerBottomTerms}>
            <View style={styles.containerBottomTermsFlex}>
              <View style={styles.termsTextContainer}>
                <Text style={[globalStyles.regularSmallText, styles.termsText]}>
                  By signing in, you agree to Chick-fil-A’s{' '}
                  <TouchableOpacity onPress={this.handleTermsPress}>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightBlue
  },
  containerBottom: {
    flex: 1,
    backgroundColor: colors.white
  },
  containerBottomTerms: {
    height: 100,
    paddingTop: 14
  },
  containerBottomTermsFlex: {
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

export default AuthModeScreen;
