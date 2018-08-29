import React, { Component } from 'react';
import { Dimensions, StatusBar, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import PropTypes from 'prop-types';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';

import { colors, globalStyles } from '../../config/globalStyles';
import constants from '../../config/constants';

import LegalScreen from './LegalScreen';
import LicenseScreen from './LicenseScreen';

const LEGAL_TAB_WIDTH = 34;
const LICENSES_TAB_WIDTH = 56;
const ALL_TABS_WIDTH = LEGAL_TAB_WIDTH + LICENSES_TAB_WIDTH;
const TOTAL_NUMBER_OF_TABS = 2;
const TOTAL_WIDTH = Dimensions.get('window').width;
const TAB_GAP_WIDTH = (TOTAL_WIDTH - ALL_TABS_WIDTH) / (TOTAL_NUMBER_OF_TABS + 1);

class TermsAndConditionsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModal: false
    };
  }
  componentDidMount() {
    this.setState({
      isModal: this.props.navigation.getParam('isModal', false)
    });
  }

  componentWillUnmount() {
    StatusBar.setBarStyle('dark-content');
  }

  didFocusHandler = () => {
    if (this.state.isModal) {
      StatusBar.setBarStyle('light-content');
    }
  };

  render() {
    const activeColor = this.state.isModal
      ? colors.modalNavigationHeaderTabActive
      : colors.navigationHeaderTabActive;
    const inactiveColor = this.state.isModal
      ? colors.modalNavigationHeaderTabInactive
      : colors.navigationHeaderTabInactive;
    const underlineColor = this.state.isModal
      ? colors.modalNavigationHeaderTabUnderline
      : colors.navigationHeaderTabUnderline;
    const tabBarStyle = this.state.isModal
      ? globalStyles.modalNavigationHeaderTabBar
      : globalStyles.navigationHeaderTabBar;

    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents onDidFocus={this.didFocusHandler} onDidBlur={this.didBlurHandler} />
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
          prerenderingSiblingsNumber={Infinity}
        >
          <LegalScreen tabLabel={{ label: 'Legal' }} />
          <LicenseScreen tabLabel={{ label: 'Licenses' }} />
        </ScrollableTabView>
      </View>
    );
  }
}

TermsAndConditionsScreen.propTypes = {
  navigation: PropTypes.object
};

export default TermsAndConditionsScreen;
