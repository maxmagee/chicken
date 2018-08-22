import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '../../config/globalStyles';

import IconAndEllipsisCalloutScreen from '../shared/IconAndEllipsisCalloutScreen';

class TransactionHistoryScreen extends Component {
  renderEmptyScreen = () => (
    <IconAndEllipsisCalloutScreen
      icon={<MaterialIcons name="receipt" size={150} color={colors.darkBlue} />}
      largeText="You haven't placed any orders yet"
      emphasizedText="TAP THE MENU TO START ORDERING"
    />
  );

  render() {
    // TODO: render the order contents once an item has been added to an order
    return this.renderEmptyScreen();
  }
}

TransactionHistoryScreen.propTypes = {
  navigation: PropTypes.object
};

export default TransactionHistoryScreen;
