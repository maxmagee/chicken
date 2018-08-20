import React, { Component } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors } from '../../../config/globalStyles';

import SettingsListItem from '../../../components/listItems/SettingsListItem';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      announcementsValue: true,
      faceIDValue: true,
      mobileOrdersValue: true,
      rewardsValue: true
    };
  }

  handleToggle = key => {
    this.setState(prevState => ({
      [key]: !prevState[key]
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionHeader}>Notification preferences</Text>
        <SettingsListItem
          label="Rewards"
          description="Notifications about new rewards, expiring rewards, and Cow Calendar rewards."
          value={this.state.rewardsValue}
          onValueChange={() => {
            this.handleToggle('rewardsValue');
          }}
        />
        <SettingsListItem
          label="Mobile orders"
          description="Notifications when an order is ready."
          value={this.state.mobileOrdersValue}
          onValueChange={() => {
            this.handleToggle('mobileOrdersValue');
          }}
        />
        <SettingsListItem
          label="App-related announcements"
          description="Be the first to know about new app features and promotions."
          value={this.state.announcementsValue}
          onValueChange={() => {
            this.handleToggle('announcementsValue');
          }}
        />
        <Text style={styles.sectionHeader}>Security</Text>
        <SettingsListItem
          label="Face ID"
          description="Turns on Face ID for a faster and more secure login experience."
          value={this.state.faceIDValue}
          onValueChange={() => {
            this.handleToggle('faceIDValue');
          }}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  sectionHeader: {
    color: colors.darkGray,
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    paddingLeft: 20
  }
});

export default SettingsScreen;
