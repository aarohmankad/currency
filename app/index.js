import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';

EStyleSheet.build({
  $white: '#FFFFFF',
  $lightGrey: '#F0F0F0',
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
});

export default () => <Navigator />;
