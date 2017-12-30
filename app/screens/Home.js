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

class Home extends Component {
  static propTypes = {
    navigation: propTypes.object,
    dispatch: propTypes.func,
    baseCurrency: propTypes.string,
    quoteCurrency: propTypes.string,
    rate: propTypes.number,
    date: propTypes.object,
    amount: propTypes.string,
    isFetching: propTypes.bool,
  };

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base',
    });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote',
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

  render = () => {
    const {
      baseCurrency,
      quoteCurrency,
      rate,
      date,
      amount,
      isFetching,
    } = this.props;
    let quotePrice = (amount * rate).toFixed(2);

    if (isFetching) {
      quotePrice = '...';
    }

    return (
      <Container>
        <StatusBar translucent={true} barStyle="light-content" />

        <Header onPress={this.handleOptionsPress} />

        <KeyboardAvoidingView behavior="padding">
          <Logo />

          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={amount}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />

          <InputWithButton
            buttonText={quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            value={quotePrice}
            editable={false}
          />

          <LastConverted
            base={baseCurrency}
            quote={quoteCurrency}
            exchangeRate={rate}
            date={date}
          />

          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  };
}

const mapStateToProps = state => {
  const { baseCurrency, quoteCurrency, amount } = state.currencies;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    rate: rates[quoteCurrency] || 0,
    date: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
    amount: amount.toString(),
    isFetching: conversionSelector.isFetching,
  };
};

export default connect(mapStateToProps)(Home);
