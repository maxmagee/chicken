import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SimpleLineIcons } from '@expo/vector-icons';

import { colors, globalStyles } from '../../config/globalStyles';

class MyOrderScreen extends Component {
  renderEmptyScreen = () => (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.iconContainer}>
          <SimpleLineIcons name="bag" size={150} color={colors.darkBlue} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.calloutTextContainer}>
          <Text style={[globalStyles.callout, { color: colors.darkGray }]}>
            You haven't started an order yet
          </Text>
        </View>
        <Text style={styles.ellipsis}>. . .</Text>
        <Text style={[globalStyles.calloutEmphasized, { color: colors.darkGray, fontSize: 13 }]}>
          TAP THE MENU TO START ORDERING
        </Text>
      </View>
    </View>
  );

  render() {
    // TODO: render the order contents once an item has been added to an order
    return this.renderEmptyScreen();
  }
}

MyOrderScreen.propTypes = {
  navigation: PropTypes.object
};

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    backgroundColor: colors.lightBlue,
    height: 493,
    width: '100%'
  },
  iconContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: colors.white
  },
  calloutTextContainer: {
    width: 270
  },
  ellipsisContainer: {},
  calloutEmphasizedContainer: {},
  ellipsis: {
    color: colors.darkGray,
    fontFamily: 'Times New Roman',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -15 // centers the ellipsis between the two texts
  }
});

export default MyOrderScreen;
