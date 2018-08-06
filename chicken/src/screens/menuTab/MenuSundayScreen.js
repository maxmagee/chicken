import React, { Component } from 'react';
import { Alert, SafeAreaView, ImageBackground, StatusBar, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { globalStyles } from '../../config/globalStyles';
import buildingAtNight from '../../../assets/backgrounds/buildingAtNight.png';

import GradientButton from '../../components/GradientButton';

class MenuSundayScreen extends Component {
  handleViewMenuPress = () => {
    // TODO: Make this load the online menu web-page.
    Alert.alert(
      `We're Sorry!`,
      `The web menu is not currently available. Please check again later.`
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.fixed}>
          <ImageBackground source={buildingAtNight} style={styles.imageBackground}>
            <SafeAreaView style={styles.insideImageContainer}>
              <View style={styles.calloutEmphasizedContainer}>
                <Text style={globalStyles.calloutEmphasized}>WE'RE CLOSED ON SUNDAYS</Text>
              </View>
              <View style={styles.calloutBigContainer}>
                <Text style={globalStyles.calloutBig}>Come and see us again on Monday</Text>
              </View>
              <View style={styles.bottomContainer}>
                <View style={styles.buttonContainer}>
                  <GradientButton label="View the menu" onPress={this.handleViewMenuPress} />
                </View>
              </View>
            </SafeAreaView>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

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
    padding: 20
  },
  buttonContainer: {
    width: '100%'
  }
});

export default MenuSundayScreen;
