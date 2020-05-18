import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import EStyleSheet from 'react-native-extended-stylesheet';
import { colors } from '../../config/globalStyles';

class LegalScreen extends Component {
  renderError = () => (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>We're sorry! The page you're looking for can't be found.</Text>
    </View>
  );

  render() {
    return (
      <WebView
        style={styles.webview}
        source={{ uri: 'https://www.chick-fil-a.com/Legal' }}
        startInLoadingState
        scalesPageToFit
        renderError={this.renderError}
      />
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

export default LegalScreen;
