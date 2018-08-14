import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, globalStyles } from '../../config/globalStyles';
import sun from '../../../assets/images/sun.png';

import EllipsisCallout from '../../components/EllipsisCallout';

class EmailSignInScreen extends Component {
  handleTermsPress = () => {
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
          <Text>Bottom section</Text>
          <View style={styles.containerBottomTerms}>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 14
  },
  termsTextContainer: {
    width: 195
  },
  termsText: {
    textAlign: 'center'
  }
});

export default EmailSignInScreen;
