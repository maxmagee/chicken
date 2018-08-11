import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Data from '../../data/licenses';
import { colors } from '../../config/globalStyles';

import LicenseList from '../../components/LicenseList';

function extractNameFromGithubUrl(url) {
  if (!url) {
    return null;
  }

  const reg = /((https?:\/\/)?(www\.)?github\.com\/)?(@|#!\/)?([A-Za-z0-9_]{1,15})(\/([-a-z]{1,20}))?/i; //eslint-disable-line
  const components = reg.exec(url);

  if (components && components.length > 5) {
    return components[5];
  }
  return null;
}

function sortDataByKey(data, key) {
  return data.sort((a, b) => a[key] > b[key]);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const licenseItems = Object.keys(Data).map(key => {
  const { licenses, ...license } = Data[key];
  const [name, version] = key.split('@');

  let username =
    extractNameFromGithubUrl(license.repository) || extractNameFromGithubUrl(license.licenseUrl);

  let userUrl;
  let image;
  if (username) {
    username = capitalizeFirstLetter(username);
    image = `http://github.com/${username}.png`;
    userUrl = `http://github.com/${username}`;
  }

  return {
    key,
    name,
    image,
    userUrl,
    username,
    licenses: licenses.slice(0, 405),
    version,
    ...license
  };
});

sortDataByKey(licenseItems, 'username');

class LicenseScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LicenseList licenses={licenseItems} />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
});

export default LicenseScreen;
