import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class TermsAndConditionsScreen extends Component {
  componentWillUnmount() {
    StatusBar.setBarStyle('dark-content');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontFamily: 'Arial', fontSize: 20, color: 'black' }}>
          Terms & Conditions
        </Text>
      </View>
    );
  }
}

TermsAndConditionsScreen.propTypes = {
  navigation: PropTypes.object
};

export default TermsAndConditionsScreen;
