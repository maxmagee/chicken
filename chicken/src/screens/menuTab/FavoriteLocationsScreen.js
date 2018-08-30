import React, { Component } from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { colors } from '../../config/globalStyles';

import IconAndEllipsisCalloutScreen from '../shared/IconAndEllipsisCalloutScreen';

class FavoriteLocationsScreen extends Component {
  renderEmptyFavoritesList = () => {
    return (
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <IconAndEllipsisCalloutScreen
          icon={<Entypo name="location-pin" size={150} color={colors.red} />}
          largeText="Welcome to your favorite locations"
          emphasizedText="TAP THE HEART FOR QUICK AND EASY ORDERING"
        />
      </View>
    );
  };
  render() {
    // TODO: render favorites list once we have a way of tracking them
    return this.renderEmptyFavoritesList();
  }
}

export default FavoriteLocationsScreen;
