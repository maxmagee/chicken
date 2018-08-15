import React, { Component } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, globalStyles } from '../../config/globalStyles';
import sun from '../../../assets/images/sun.png';

import EllipsisCallout from '../../components/EllipsisCallout';
import FloatingLabelTextInput from '../../components/FloatingLabelTextInput';
import GradientButton from '../../components/GradientButton';
import TermsAgreementWaiver from '../../components/authentication/TermsAgreementWaiver';

class EmailSignInScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: '',
      hidePassword: true,
      password: '',
      togglePasswordText: 'Show password'
    };
  }

  handleEmailChangeText = newValue => {
    this.setState({
      emailAddress: newValue
    });
  };

  handleForgotPassword = () => {
    console.log('handleForgotPassword');
  };

  handlePasswordChangeText = newValue => {
    this.setState({
      password: newValue
    });
  };

  handleSignIn = () => {
    Alert.alert(`We're Sorry!, 'Signing in is not available yet. Please check again later.`);
  };

  handleTogglePassword = () => {
    this.setState(prevState => ({
      hidePassword: !prevState.hidePassword,
      togglePasswordText: prevState.hidePassword ? 'Hide password' : 'Show password'
    }));
  };

  handleTermsPress = () => {
    this.props.navigation.navigate('TermsAndConditionsNavigator');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <View style={styles.imageContainer}>
            <Image source={sun} height={160} width={160} />
          </View>
          <EllipsisCallout
            backgroundColor={colors.lightBlue}
            largeText="Let's get started"
            emphasizedText="SIGN IN TO CHICK-FIL-A ONE"
          />
        </View>
        <View style={styles.containerBottom}>
          <FloatingLabelTextInput
            label="EMAIL ADDRESS"
            value={this.state.emailAddress}
            onChangeText={this.handleEmailChangeText}
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
            clearButtonMode="while-editing"
            keyboardType="email-address"
            returnKeyType="next"
          />
          <FloatingLabelTextInput
            label="PASSWORD"
            value={this.state.password}
            onChangeText={this.handlePasswordChangeText}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            returnKeyType="next"
            secureTextEntry={this.state.hidePassword}
          />
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <View>
              <TouchableOpacity onPress={this.handleForgotPassword}>
                <Text style={globalStyles.smallTextButton}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={this.handleTogglePassword}>
                <Text style={globalStyles.smallTextButton}>{this.state.togglePasswordText}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ justifyContent: 'flex-end' }}>
            <View style={styles.buttonContainer}>
              <GradientButton label="Sign in" onPress={this.handleSignIn} />
            </View>
            <TermsAgreementWaiver navigation={this.props.navigation} />
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
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerBottom: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20
  },
  passwordButtonsContainer: {
    backgroundColor: 'yellow',
    height: 50
  }
});

export default EmailSignInScreen;
