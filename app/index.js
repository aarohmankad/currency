import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import Options from './screens/Options';

EStyleSheet.build({
  $white: '#FFFFFF',
  $lightGrey: '#F0F0F0',
  $primaryBlue: '#4F6D7A',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
});

export default () => <Options />;
// export default () => <CurrencyList />;
// export default () => <Home />;
