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
import {
  getInitialConversion,
  changeCurrencyAmount,
  swapCurrencies,
} from '../actions/currencies';
import { connectAlert } from '../components/Alert';

class Home extends Component {
  static propTypes = {
    navigation: propTypes.object,
    dispatch: propTypes.func,
    alertWithType: propTypes.func,
    baseCurrency: propTypes.string,
    quoteCurrency: propTypes.string,
    primaryColor: propTypes.string,
    rate: propTypes.number,
    date: propTypes.object,
    amount: propTypes.string,
    isFetching: propTypes.bool,
    conversionError: propTypes.string,
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

  componentWillMount = () => {
    this.props.dispatch(getInitialConversion());
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.conversionError) {
      this.props.alertWithType('error', 'Error', nextProps.conversionError);
    }
  };

  render = () => {
    const {
      baseCurrency,
      quoteCurrency,
      primaryColor,
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
      <Container primaryColor={primaryColor}>
        <StatusBar translucent={true} barStyle="light-content" />

        <Header onPress={this.handleOptionsPress} />

        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={primaryColor} />

          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={amount}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            textColor={primaryColor}
            editable
          />

          <InputWithButton
            buttonText={quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            value={quotePrice}
            textColor={primaryColor}
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
  const { baseCurrency, quoteCurrency, amount, error } = state.currencies;
  const { primaryColor } = state.themes;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    primaryColor,
    rate: rates[quoteCurrency] || 0,
    date: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
    amount: amount.toString(),
    isFetching: conversionSelector.isFetching,
    conversionError: error,
  };
};

export default connect(mapStateToProps)(connectAlert(Home));
