import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, globalStyles } from '../../config/globalStyles';

import TermsAndConditionsScreen from '../../screens/accountTab/TermsAndConditionsScreen';

const renderHeaderLeft = navigation => {
  // I had to wrap the icon like this to move it away from the edge
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.dismiss();
      }}
    >
      <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
          <Ionicons name="md-close" size={30} color={colors.white} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TermsAndConditionsNavigator = createStackNavigator(
  {
    TermsAndConditions: {
      screen: TermsAndConditionsScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Terms & Conditions',
        headerTitleStyle: globalStyles.modalNavigationHeaderTitle,
        headerStyle: {
          backgroundColor: colors.modalNavigationHeaderBackground
        },
        headerLeft: renderHeaderLeft(navigation)
      })
    }
  },
  {
    headerMode: 'screen'
  }
);

const styles = EStyleSheet.create({
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    width: 100
  },
  iconWrapper: {
    paddingLeft: 15,
    marginTop: 0
  }
});

export default TermsAndConditionsNavigator;
