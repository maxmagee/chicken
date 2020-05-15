import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import { colors, globalStyles } from '../globalStyles';

import HeaderLeftButton from '../../components/navigationHeader/HeaderLeftButton';

import CustomerSupportScreen from '../../screens/accountTab/CustomerSupportScreen';

const CustomerSupportModalNavigator = createStackNavigator({
  CustomerSupport: {
    screen: CustomerSupportScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Customer support',
      headerTitleStyle: globalStyles.modalNavigationHeaderTitle,
      headerStyle: globalStyles.getModalNavigationHeaderStyle(),
      headerLeft: <HeaderLeftButton type="close" color={colors.white} navigation={navigation} />
    })
  }
});

export default CustomerSupportModalNavigator;
