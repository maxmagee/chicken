import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import FloatingLabelTextInput from '../../components/FloatingLabelTextInput';

class EmailSignUpScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Email Sign Up Screen</Text>
      </View>
    );
  }
}

export default EmailSignUpScreen;
