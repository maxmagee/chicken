import React, { Component } from 'react';
import { Dimensions, StatusBar, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import PropTypes from 'prop-types';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';

import { colors, globalStyles } from '../../config/globalStyles';
import constants from '../../config/constants';

import FavoriteLocationsScreen from './FavoriteLocationsScreen';
import NearestLocationsScreen from './NearestLocationsScreen';

const FAVORITES_TAB_WIDTH = 59;
const NEAREST_TAB_WIDTH = 49;
const ALL_TABS_WIDTH = FAVORITES_TAB_WIDTH + NEAREST_TAB_WIDTH;
const TOTAL_NUMBER_OF_TABS = 2;
const TOTAL_WIDTH = Dimensions.get('window').width;
const TAB_GAP_WIDTH = (TOTAL_WIDTH - ALL_TABS_WIDTH) / (TOTAL_NUMBER_OF_TABS + 1);

class ChooseLocationTabScreen extends Component {
  handleChangeTab = tab => {
    if (tab.i === 0) {
      this.props.navigation.setParams({ title: 'Order faster with favorites' });
    } else {
      this.props.navigation.setParams({ title: 'Nearest locations' });
    }
  };

  didFocusHandler = () => {
    StatusBar.setBarStyle('light-content');
  };

  render() {
    const activeColor = colors.modalNavigationHeaderTabActive;
    const inactiveColor = colors.modalNavigationHeaderTabInactive;
    const underlineColor = colors.modalNavigationHeaderTabUnderline;
    const tabBarStyle = globalStyles.modalNavigationHeaderTabBar;

    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents onDidFocus={this.didFocusHandler} />
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
          onChangeTab={this.handleChangeTab}
          prerenderingSiblingsNumber={Infinity}
        >
          <FavoriteLocationsScreen tabLabel={{ label: 'Favorites' }} />
          <NearestLocationsScreen tabLabel={{ label: 'Nearest' }} />
        </ScrollableTabView>
      </View>
    );
  }
}

ChooseLocationTabScreen.propTypes = {
  navigation: PropTypes.object
};

export default ChooseLocationTabScreen;
