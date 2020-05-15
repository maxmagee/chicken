import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import { colors, globalStyles } from '../globalStyles';

import HeaderLeftButton from '../../components/navigationHeader/HeaderLeftButton';

import ChooseLocationTabScreen from '../../screens/menuTab/ChooseLocationTabScreen';

const LocationNavigator = createStackNavigator({
  TermsAndConditions: {
    screen: ChooseLocationTabScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title', 'Order faster with favorites'),
      headerTitleStyle: Object.assign({}, globalStyles.modalNavigationHeaderTitle, {
        fontSize: 16
      }),
      headerStyle: globalStyles.getModalNavigationHeaderStyle(),
      headerLeft: <HeaderLeftButton type="close" color={colors.white} navigation={navigation} />
    })
  }
});

export default LocationNavigator;
