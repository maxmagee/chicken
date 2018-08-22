import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import PropTypes from 'prop-types';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';

import { colors, globalStyles } from '../../../config/globalStyles';
import constants from '../../../config/constants';

import ScanAndPayScreen from './ScanAndPayScreen';
import AddFundsScreen from './AddFundsScreen';

const SCAN_AND_PAY_TAB_WIDTH = 71;
const ADD_FUNDS_TAB_WIDTH = 64;
const ALL_TABS_WIDTH = SCAN_AND_PAY_TAB_WIDTH + ADD_FUNDS_TAB_WIDTH;
const TOTAL_NUMBER_OF_TABS = 2;
const TOTAL_WIDTH = Dimensions.get('window').width;
const TAB_GAP_WIDTH = (TOTAL_WIDTH - ALL_TABS_WIDTH) / (TOTAL_NUMBER_OF_TABS + 1);

class ScanScreen extends Component {
  render() {
    const activeColor = colors.navigationHeaderTabActive;
    const inactiveColor = colors.navigationHeaderTabInactive;
    const underlineColor = colors.navigationHeaderTabUnderline;
    const tabBarStyle = globalStyles.navigationHeaderTabBar;

    return (
      <View style={{ flex: 1, borderWidth: 0 }}>
        <ScrollableTabView
          renderTabBar={() => (
            <TabBar
              underlineColor={underlineColor}
              tabBarStyle={tabBarStyle}
              tabBarTextStyle={[
                globalStyles.modalNavigationHeaderTabLabel,
                { color: inactiveColor }
              ]}
              activeTabTextStyle={[
                globalStyles.modalNavigationHeaderTabLabel,
                { color: activeColor }
              ]}
              underlineHeight={constants.modalNavigationTabBarUnderlineHeight}
              tabMargin={TAB_GAP_WIDTH}
            />
          )}
        >
          <ScanAndPayScreen tabLabel={{ label: 'Scan & Pay' }} />
          <AddFundsScreen tabLabel={{ label: 'Add funds' }} />
        </ScrollableTabView>
      </View>
    );
  }
}

ScanScreen.propTypes = {
  navigation: PropTypes.object
};

export default ScanScreen;
