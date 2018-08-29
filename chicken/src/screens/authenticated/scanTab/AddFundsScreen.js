import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors } from '../../../config/globalStyles';

import CircleButton from '../../../components/buttons/CircleButton';
import MainActionButton from '../../../components/buttons/GradientButton';

class AddFundsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: null,
      amountButtons: [
        {
          label: '$25',
          selected: false,
          value: 25
        },
        {
          label: '$50',
          selected: false,
          value: 50
        },
        {
          label: '$75',
          selected: false,
          value: 75
        },
        {
          label: '$100',
          selected: false,
          value: 100
        },
        {
          label: 'Other',
          selected: false,
          value: 0
        }
      ]
    };
  }

  toggleKeyboard = () => {};

  handleAmountPress = index => {
    if (index === this.state.amountButtons.length - 1) {
      Alert.alert(
        `We're sorry!`,
        `Providing other amounts is not available yet. Please check again later.`
      );
    }

    this.setState({
      amountButtons: this.state.amountButtons.map((button, i) => {
        return {
          ...button,
          selected: i === index
        };
      })
    });
  };

  handleGiftCardPress = () => {
    Alert.alert(
      `We're Sorry!`,
      `Transfering a gift card is not supported yet. Please check again later.`
    );
  };

  handlePaymentMethodPress = () => {
    Alert.alert(
      `We're Sorry!`,
      `Choosing a payment method is not supported yet. Please check again later.`
    );
  };

  renderAmountButtons = () => (
    <View style={styles.buttonAmountContainer}>
      <View style={styles.buttonAmountContainerFlex}>
        {this.state.amountButtons.map((button, index) => {
          return (
            <CircleButton
              key={index}
              text={button.label}
              selected={button.selected}
              onPress={() => {
                this.handleAmountPress(index);
              }}
            />
          );
        })}
      </View>
    </View>
  );

  renderMainActionButton = () => {
    if (
      this.state.amountButtons.some(button => button.selected) &&
      this.state.amountButtons[this.state.amountButtons.length - 1].selected === false
    ) {
      return (
        <View style={styles.actionButtonContainer}>
          <MainActionButton
            type="red"
            label="Choose a payment method"
            onPress={this.handlePaymentMethodPress}
          />
        </View>
      );
    }
    return null;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>How much would you like to add?</Text>
        {this.renderAmountButtons()}
        <Text style={styles.smallText}>
          Maximum balance is $200. Chick-fil-A One funds are non-refundable and may not be used to
          purchase physical gift cards.
        </Text>
        <TouchableOpacity onPress={this.handleGiftCardPress}>
          <Text style={styles.linkButton}>Transfer a gift card</Text>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>{this.renderMainActionButton()}</View>
      </View>
    );
  }
}

AddFundsScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20
  },
  buttonAmountContainer: {
    height: 50,
    width: '100%',
    marginTop: 15,
    marginBottom: 15
  },
  buttonAmountContainerFlex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    color: colors.darkGray,
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  smallText: {
    color: colors.darkGray,
    fontFamily: 'Arial',
    fontSize: 11,
    fontWeight: 'normal',
    textAlign: 'center'
  },
  linkButton: {
    color: colors.red,
    fontFamily: 'Arial',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 15
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  actionButtonContainer: {
    width: '100%'
  }
});

export default AddFundsScreen;
