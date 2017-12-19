import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

// import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
  $white: '#FFFFFF',
  $lightGrey: '#F0F0F0',
  $primaryBlue: '#4F6D7A',
  $border: '#E2E2E2',
  $inputText: '#797979',
});

export default () => <CurrencyList />;
// export default () => <Home />;
