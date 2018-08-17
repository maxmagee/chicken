import React, { Component } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import constants from '../../config/constants';
import { colors, globalStyles } from '../../config/globalStyles';

import MainActionButton from '../../components/buttons/MainActionButton';

class GeneralizedSignedOutScreen extends Component {
  handleButtonPress = () => {
    this.props.navigation.navigate('AuthenticationNavigator');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomTextContainer}>
            <Text style={globalStyles.mainStatement}>{this.props.mainText}</Text>
          </View>
          <View style={this.props.childStyles}>{this.props.children}</View>
          <View style={styles.buttonContainer}>
            <MainActionButton
              type={constants.actionButtonTypes.BUTTON_TYPE_RED}
              label="Sign in to Chick-fil-A One"
              onPress={this.handleButtonPress}
            />
          </View>
        </View>
        <View style={styles.fixed}>
          <ImageBackground source={this.props.image} style={styles.imageBackground}>
            <View style={styles.insideImageContainer}>
              <View style={styles.calloutContainer}>
                <Text style={globalStyles.callout}>{this.props.callout}</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

GeneralizedSignedOutScreen.propTypes = {
  callout: PropTypes.string,
  children: PropTypes.element,
  childStyles: PropTypes.number,
  image: PropTypes.number.isRequired,
  mainText: PropTypes.string,
  navigation: PropTypes.object.isRequired
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 438,
    width: '100%'
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  insideImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 45
  },
  calloutContainer: {
    width: 250
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 20,
    paddingHorizontal: 10,
    paddingTop: 455,
    backgroundColor: colors.white
  },
  bottomTextContainer: {
    paddingHorizontal: 10,
    width: 350,
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    width: '100%'
  }
});

export default GeneralizedSignedOutScreen;
