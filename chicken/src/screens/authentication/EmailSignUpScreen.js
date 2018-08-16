import React, { Component } from 'react';
import { Alert, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import constants from '../../config/constants';
import { colors, globalStyles } from '../../config/globalStyles';

import FloatingLabelTextInput from '../../components/FloatingLabelTextInput';
import MainActionButton from '../../components/buttons/MainActionButton';
import TermsAgreementWaiver from '../../components/authentication/TermsAgreementWaiver';

class EmailSignUpScreen extends Component {
  // TODO: length indicator number for first / last name
  // TODO: Password strength indicator
  // TODO: Shake animation / red text change on validation failure https://stackoverflow.com/questions/47921658/react-native-how-to-animate-a-particular-component
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      confirmPassword: '',
      emailIsValid: null,
      passwordIsValid: null,
      confirmPasswordIsValid: null,
      passwordBorderColor: globalStyles.textInput.container.borderBottomColor || colors.gray
    };
  }

  handleFirstNameChangeText = newValue => {
    this.setState({
      firstName: newValue
    });
  };

  handleLastNameChangeText = newValue => {
    this.setState({
      lastName: newValue
    });
  };

  handleEmailChangeText = newValue => {
    this.setState({
      emailAddress: newValue,
      emailIsValid: null
    });
  };

  handlePasswordChangeText = newValue => {
    const passwordLength = newValue.length;
    let borderColor = globalStyles.textInput.container.borderBottomColor;

    if (passwordLength > 0 && passwordLength < 6) {
      // very weak
      borderColor = colors.maroon || 'maroon';
    } else if (passwordLength >= 6 && passwordLength < 8) {
      // weak
      borderColor = colors.red;
    } else if (passwordLength >= 8 && passwordLength < 13) {
      // reasonable
      borderColor = colors.orange || 'orange';
    } else if (passwordLength >= 13 && passwordLength < 20) {
      // strong
      borderColor = colors.yellow || 'yellow';
    } else if (passwordLength >= 20) {
      // very strong
      borderColor = colors.green || 'green';
    }

    this.setState({
      password: newValue,
      passwordIsValid: null,
      passwordBorderColor: borderColor
    });
  };

  handleConfirmPasswordChangeText = newValue => {
    this.setState({
      confirmPassword: newValue,
      confirmPasswordIsValid: null
    });
  };

  handleSignUp = () => {
    if (this.formIsValid()) {
      Alert.alert(`Success!`, `Would be attempting registration right now if it was supported.`);
    } else {
      Alert.alert(`Uh Oh!`, `There are problems with the values provided.`);
    }
  };

  indicateInvalidFields = () => {
    console.log('inside indicateInvalidFields');
    if (
      this.state.emailIsValid &&
      this.state.passwordIsValid &&
      this.state.confirmPasswordIsValid
    ) {
      console.log('all fields are valid');
    } else {
      console.log('shaking invalid fields and making them red...');
    }
  };

  formIsValid = () => {
    const emailResult = this.emailIsValid();
    const passwordResult = this.passwordIsValid();
    const confirmPasswordResult = this.confirmPasswordIsValid();

    this.setState(
      {
        emailIsValid: emailResult,
        passwordIsValid: passwordResult,
        confirmPasswordIsValid: confirmPasswordResult
      },
      () => {
        this.indicateInvalidFields();
      }
    );

    return emailResult && passwordResult && confirmPasswordResult;
  };

  confirmPasswordIsValid = () => {
    return this.state.password === this.state.confirmPassword;
  };

  emailIsValid = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(this.state.emailAddress);
  };

  passwordIsValid = () => {
    // Must be 8 characters long, contain a least one number, contain at least one letter
    return (
      this.state.password.length >= 8 &&
      /\d/.test(this.state.password) &&
      /[a-z]/i.test(this.state.password)
    );
  };

  renderActionButton = () => {
    const allValuesProvided = [
      'firstName',
      'lastName',
      'emailAddress',
      'password',
      'confirmPassword'
    ].every(key => {
      return this.state[key] !== '';
    });

    if (allValuesProvided) {
      return (
        <MainActionButton
          type={constants.actionButtonTypes.BUTTON_TYPE_RED}
          label="Continue"
          onPress={this.handleSignUp}
        />
      );
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <FloatingLabelTextInput
            label="FIRST NAME"
            value={this.state.firstName}
            onChangeText={this.handleFirstNameChangeText}
            autoCapitalize="words"
            autoCorrect={false}
            clearButtonMode="while-editing"
            keyboardType="default"
            returnKeyType="next"
          />
          <FloatingLabelTextInput
            label="LAST NAME"
            value={this.state.lastName}
            onChangeText={this.handleLastNameChangeText}
            autoCapitalize="words"
            autoCorrect={false}
            clearButtonMode="while-editing"
            keyboardType="default"
            returnKeyType="next"
          />
          <FloatingLabelTextInput
            label="EMAIL ADDRESS"
            value={this.state.emailAddress}
            onChangeText={this.handleEmailChangeText}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            keyboardType="email-address"
            isValid={this.state.emailIsValid}
            returnKeyType="next"
          />
          <FloatingLabelTextInput
            label="PASSWORD"
            value={this.state.password}
            onChangeText={this.handlePasswordChangeText}
            autoCapitalize="none"
            autoCorrect={false}
            borderBottomColor={this.state.passwordBorderColor}
            clearButtonMode="while-editing"
            isValid={this.state.passwordIsValid}
            returnKeyType="next"
            secureTextEntry
          />
          <FloatingLabelTextInput
            label="CONFIRM PASSWORD"
            value={this.state.confirmPassword}
            onChangeText={this.handleConfirmPasswordChangeText}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            isValid={this.state.confirmPasswordIsValid}
            returnKeyType="next"
            secureTextEntry
          />
          <View style={styles.passwordRequirementContainer}>
            <View style={styles.passwordRequirementTextContainer}>
              <Text style={[globalStyles.regularSmallText, styles.passwordRequirementText]}>
                Password must be at least eight characters including a number and a letter. We
                recommend using a unique password you have not used with any other service.
              </Text>
            </View>
          </View>
          <View style={{ justifyContent: 'flex-start' }}>
            <View style={styles.buttonContainer}>{this.renderActionButton()}</View>
            <TermsAgreementWaiver navigation={this.props.navigation} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

EmailSignUpScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 15
  },
  passwordRequirementContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  passwordRequirementTextContainer: {
    width: '100%'
  },
  passwordRequirementText: {
    textAlign: 'center'
  }
});

export default EmailSignUpScreen;
