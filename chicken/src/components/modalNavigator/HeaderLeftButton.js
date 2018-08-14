import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

const HeaderLeftButton = props => {
  const onPress = props.type === 'back' ? props.navigation.goBack : props.navigation.dismiss;
  const iconName = props.type === 'back' ? 'ios-arrow-back' : 'md-close';
  const iconSize = 30;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
          <Ionicons name={iconName} size={iconSize} color={props.color} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

HeaderLeftButton.propTypes = {
  color: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['back', 'close']).isRequired
};

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

export default HeaderLeftButton;
