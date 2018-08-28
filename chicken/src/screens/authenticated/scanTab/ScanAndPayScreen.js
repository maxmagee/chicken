import React from 'react';
import { Image, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors } from '../../../config/globalStyles';
import qrCode from '../../../../assets/images/qrCode.jpeg';

import EllipsisCallout from '../../../components/EllipsisCallout';

const ScanAndPayScreen = () => (
  <View style={styles.container}>
    <View style={styles.topContainer}>
      <Image source={qrCode} height={190} width={190} />
    </View>
    <View style={styles.bottomContainer}>
      <EllipsisCallout
        emphasizedText="You can scan your QR code at the register to pay and to earn points toward your next reward." //eslint-disable-line max-len
        emphasizedTextStyle={styles.emphasizedTextStyle}
        largeText="Scan to earn points"
        textColor={colors.white}
      />
    </View>
  </View>
);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  emphasizedTextStyle: {
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: 'normal'
  }
});

export default ScanAndPayScreen;
