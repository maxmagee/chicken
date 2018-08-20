import React, { Component } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import IconAndEllipsisCalloutScreen from '../../shared/IconAndEllipsisCalloutScreen';
import { colors } from '../../../config/globalStyles';

// TODO: Render reward list instead of empty screen if they have rewards
class PastRewardsScreen extends Component {
  render() {
    return (
      <IconAndEllipsisCalloutScreen
        icon={<MaterialCommunityIcons name="gift" size={150} color={colors.darkBlue} />}
        largeText="You don't have any past rewards"
        emphasizedText="TAP THE MENU TO START ORDERING"
      />
    );
  }
}

export default PastRewardsScreen;
