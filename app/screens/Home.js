import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Texts';

const DEFAULT_BASE_CURRENCY = 'USD';
const DEFAULT_QUOTE_CURRENCY = 'GBP';
const DEFAULT_BASE_PRICE = '100';
const DEFAULT_QUOTE_PRICE = '79.74';
const DEFAULT_EXCHANGE_RATE = 0.7974;
const DEFAULT_EXCHANGE_DATE = new Date();

class Home extends Component {
  handlePressBaseCurrency() {
    console.log('Press Base Currency');
  }

  handlePressQuoteCurrency() {
    console.log('Press Quote Currency');
  }

  handleTextChange(text) {
    console.log('Text Changed', text);
  }

  handleSwapCurrency() {
    console.log('Swap Currency');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={true} barStyle="light-content" />

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
      </Container>
    );
  }
}

export default Home;
