import React from 'react';
import propTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({ base, quote, exchangeRate, date }) => (
  <Text style={styles.smallText}>
    1 {base} = {exchangeRate} {quote} as of{' '}
    {moment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  base: propTypes.string,
  quote: propTypes.string,
  exchangeRate: propTypes.number,
  date: propTypes.object,
};

export default LastConverted;
