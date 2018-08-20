import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SimpleLineIcons } from '@expo/vector-icons';

import { colors } from '../../config/globalStyles';

import IconAndEllipsisCalloutScreen from '../shared/IconAndEllipsisCalloutScreen';

class MyOrderScreen extends Component {
  renderEmptyScreen = () => (
    <IconAndEllipsisCalloutScreen
      icon={<SimpleLineIcons name="bag" size={150} color={colors.darkBlue} />}
      largeText="You haven't started an order yet"
      emphasizedText="TAP THE MENU TO START ORDERING"
    />
  );

  render() {
    // TODO: render the order contents once an item has been added to an order
    return this.renderEmptyScreen();
  }
}

MyOrderScreen.propTypes = {
  navigation: PropTypes.object
};

export default MyOrderScreen;
