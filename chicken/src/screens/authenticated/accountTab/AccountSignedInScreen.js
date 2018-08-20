import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import constants from '../../../config/constants';
import { colors } from '../../../config/globalStyles';

import MainActionButton from '../../../components/buttons/MainActionButton';
import SimpleNavListItem from '../../../components/listItems/SimpleNavListItem';
import AccountHeader from '../../../components/AccountHeader';

// TODO: render the information for the actual person that's signed in for the AccountHeader
class AccountSignedInScreen extends Component {
  handleNavigateTo = routeName => {
    switch (routeName) {
      case 'CustomerSupportModalNavigator':
      case 'PastRewards':
      case 'Settings':
        this.props.navigation.navigate(routeName);
        break;
      case 'TermsAndConditions':
        this.props.navigation.navigate(routeName, { isModal: false });
        break;
      default:
        Alert.alert(`We're Sorry!`, `This feature is not available yet. Please check again later.`);
        break;
    }
    // TODO: add navigation to the proper routes once they're implemented
    // this.props.navigation.navigate(routeName);
  };

  handleSignOut = () => {
    // TODO: implement sign out method
    this.props.navigation.navigate('MainTabNavigator');
    //Alert.alert(`We're Sorry!`, `Signing out is not available yet. Please check again later.`);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerPadding} />
        <AccountHeader fullName="John Doe" email="john.doe@gmail.com" />
        <View style={styles.mainContainer}>
          <SimpleNavListItem
            label="Edit profile"
            onPress={() => this.handleNavigateTo('EditProfile')}
          />
          <SimpleNavListItem
            label="Manage payment methods"
            onPress={() => this.handleNavigateTo('ManagePaymentNavigator')}
          />
          <SimpleNavListItem
            label="Customer support"
            onPress={() => this.handleNavigateTo('CustomerSupportModalNavigator')}
          />
          <SimpleNavListItem
            label="Transaction history"
            onPress={() => this.handleNavigateTo('TransactionHistoryNavigator')}
          />
          <SimpleNavListItem
            label="Past rewards"
            onPress={() => this.handleNavigateTo('PastRewards')}
          />
          <SimpleNavListItem label="Settings" onPress={() => this.handleNavigateTo('Settings')} />
          <SimpleNavListItem
            label="Terms & conditions"
            onPress={() => this.handleNavigateTo('TermsAndConditions')}
          />
        </View>
        <View style={styles.bottomContainer}>
          <MainActionButton
            type={constants.actionButtonTypes.BUTTON_TYPE_WHITE}
            label="Sign out"
            onPress={this.handleSignOut}
          />
        </View>
      </View>
    );
  }
}

AccountSignedInScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  headerPadding: {
    backgroundColor: colors.navigationHeaderBackground,
    height: 30,
    width: '100%'
  },
  mainContainer: {
    flex: 1,
    paddingTop: 10
  },
  bottomContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20
  }
});

export default AccountSignedInScreen;
