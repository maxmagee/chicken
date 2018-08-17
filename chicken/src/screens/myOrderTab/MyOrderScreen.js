import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SimpleLineIcons } from '@expo/vector-icons';

import { colors } from '../../config/globalStyles';

import EllipsisCallout from '../../components/EllipsisCallout';

class MyOrderScreen extends Component {
  renderEmptyScreen = () => (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.iconContainer}>
          <SimpleLineIcons name="bag" size={150} color={colors.darkBlue} />
        </View>
      </View>
      <EllipsisCallout
        containerStyle={styles.ellipsisContainer}
        largeText="You haven't started an order yet"
        emphasizedText="TAP THE MENU TO START ORDERING"
      />
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
  ellipsisContainer: {
    backgroundColor: colors.white
  }
});

export default MyOrderScreen;
