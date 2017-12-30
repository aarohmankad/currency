import React, { Component } from 'react';
import propTypes from 'prop-types';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { LastConverted } from '../components/Texts';
import { ClearButton } from '../components/Buttons';
import { changeCurrencyAmount, swapCurrencies } from '../actions/currencies';

const DEFAULT_BASE_CURRENCY = 'USD';
const DEFAULT_QUOTE_CURRENCY = 'GBP';
const DEFAULT_BASE_PRICE = '100';
const DEFAULT_QUOTE_PRICE = '79.74';
const DEFAULT_EXCHANGE_RATE = 0.7974;
const DEFAULT_EXCHANGE_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: propTypes.object,
    dispatch: propTypes.func,
  };

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Base Currency',
    });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
    });
  };

  handleTextChange = amount => {
    this.props.dispatch(changeCurrencyAmount(amount));
  };

  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrencies());
  };

  handleOptionsPress = () => {
    this.props.navigation.navigate('Options');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={true} barStyle="light-content" />

        <Header onPress={this.handleOptionsPress} />

        <KeyboardAvoidingView behavior="padding">
          <Logo />

          <InputWithButton
            buttonText={DEFAULT_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={DEFAULT_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />

          <InputWithButton
            buttonText={DEFAULT_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            value={DEFAULT_QUOTE_PRICE}
            editable={false}
          />

          <LastConverted
            base={DEFAULT_BASE_CURRENCY}
            quote={DEFAULT_QUOTE_CURRENCY}
            exchangeRate={DEFAULT_EXCHANGE_RATE}
            date={DEFAULT_EXCHANGE_DATE}
          />

          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default connect()(Home);
