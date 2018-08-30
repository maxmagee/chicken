import React, { Component } from 'react';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { WebBrowser } from 'expo';

import constants from '../../config/constants';
import { globalStyles } from '../../config/globalStyles';
import breakfastBackground from '../../../assets/backgrounds/breakfastBackground.jpg';
import buildingAtNight from '../../../assets/backgrounds/buildingAtNight.png';
import dinnerBackground from '../../../assets/backgrounds/dinnerBackground.jpg';
import lunchBackground from '../../../assets/backgrounds/lunchBackground.jpg';

import MainActionButton from '../../components/buttons/MainActionButton';

class MenuWelcomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actionButtonLabel: '',
      backgroundImage: null,
      bottomText: '',
      handleActionButtonPress: () => {},
      topText: ''
    };
  }

  componentDidMount() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    let actionButtonLabel = '';
    let handleActionButtonPress = null;
    let backgroundImage = null;
    let bottomText = '';
    let topText = '';

    if (currentDate.getDay() === 0) {
      this.setState({
        actionButtonLabel: 'View the menu',
        handleActionButtonPress: this.openWebMenu,
        backgroundImage: buildingAtNight,
        bottomText: 'Come and see us again on Monday',
        topText: `WE'RE CLOSED ON SUNDAYS`
      });

      return;
    }

    actionButtonLabel = 'Start my order';
    handleActionButtonPress = this.startOrder;

    if ((currentHour >= 0 && currentHour <= 4) || currentHour > 16) {
      backgroundImage = dinnerBackground;
      bottomText = 'Dinner is coming right up';
      topText = 'GOOD EVENING';
    } else if (currentHour >= 5 && currentHour <= 11) {
      backgroundImage = breakfastBackground;
      bottomText = 'Breakfast is served';
      topText = 'GOOD MORNING';
    } else if (currentHour >= 12 && currentHour <= 16) {
      backgroundImage = lunchBackground;
      bottomText = 'Lunch is almost ready';
      topText = 'GOOD AFTERNOON';
    }

    this.setState({
      actionButtonLabel,
      handleActionButtonPress,
      backgroundImage,
      bottomText,
      topText
    });
  }

  openWebMenu = () => {
    WebBrowser.openBrowserAsync('https://www.chick-fil-a.com');
  };

  startOrder = () => {
    this.props.navigation.navigate('LocationNavigator');
  };

  renderActionButton = () => (
    <View style={styles.buttonContainer}>
      <MainActionButton
        type={constants.actionButtonTypes.BUTTON_TYPE_RED}
        label={this.state.actionButtonLabel}
        onPress={this.state.handleActionButtonPress}
      />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.fixed}>
          <ImageBackground source={this.state.backgroundImage} style={styles.imageBackground}>
            <SafeAreaView style={styles.insideImageContainer}>
              <View style={styles.calloutEmphasizedContainer}>
                <Text style={globalStyles.calloutEmphasized}>{this.state.topText}</Text>
              </View>
              <View style={styles.calloutBigContainer}>
                <Text style={globalStyles.calloutBig}>{this.state.bottomText}</Text>
              </View>
              <View style={styles.bottomContainer}>{this.renderActionButton()}</View>
            </SafeAreaView>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

MenuWelcomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  insideImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  calloutEmphasizedContainer: {
    marginTop: 20
  },
  calloutBigContainer: {
    marginTop: 15
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingBottom: 20,
    paddingHorizontal: 10
  },
  buttonContainer: {
    width: '100%'
  }
});

export default MenuWelcomeScreen;
