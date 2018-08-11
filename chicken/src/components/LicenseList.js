import React, { Component } from 'react';
import { FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import LicenseListItem from './LicenseListItem';

class LicenseList extends Component {
  renderItem = ({ item }) => <LicenseListItem {...item} />;

  render() {
    const { licenses } = this.props;

    return (
      <FlatList
        style={styles.list}
        keyExtractor={({ key }) => key}
        data={licenses}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = EStyleSheet.create({
  list: {
    flex: 1
  }
});

export default LicenseList;
