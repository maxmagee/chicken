import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationEvents } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import { colors } from '../../config/globalStyles';

class CustomerSupportScreen extends Component {
  componentWillUnmount() {
    StatusBar.setBarStyle('dark-content');
  }

  didFocusHandler = () => {
    StatusBar.setBarStyle('light-content');
  };

  renderError = () => (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>We're sorry! The page you're looking for can't be found.</Text>
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents onDidFocus={this.didFocusHandler} />
        <WebView
          style={styles.webview}
          source={{ uri: 'https://www.chick-fil-a.com/Customer-Service/Contact' }}
          startInLoadingState
          scalesPageToFit
          renderError={this.renderError}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
    padding: 20
  },
  errorText: {
    color: colors.white,
    fontFamily: 'Arial',
    fontSize: 24,
    fontWeight: 'normal',
    textAlign: 'center'
  },
  webview: {
    flex: 1
  }
});

export default CustomerSupportScreen;
