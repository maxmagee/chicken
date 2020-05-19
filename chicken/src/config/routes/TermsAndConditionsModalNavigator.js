import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import { colors, globalStyles } from '../globalStyles';

import HeaderLeftButton from '../../components/navigationHeader/HeaderLeftButton';

import TermsAndConditionsScreen from '../../screens/accountTab/TermsAndConditionsScreen';

const TermsAndConditionsModalNavigator = createStackNavigator({
  TermsAndConditions: {
    screen: TermsAndConditionsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Terms & Conditions',
      headerTitleStyle: globalStyles.modalNavigationHeaderTitle,
      headerStyle: globalStyles.getModalNavigationHeaderStyle(),
      headerLeft: () => {
        return (<HeaderLeftButton type="close" color={colors.white} navigation={navigation} />);
      },
    })
  }
});

export default TermsAndConditionsModalNavigator;
