import React, { Component } from 'react';
import propTypes from 'prop-types';
import { FlatList, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

class CurrencyList extends Component {
  static propTypes = {
    navigation: propTypes.object,
    dispatch: propTypes.func,
    baseCurrency: propTypes.string,
    quoteCurrency: propTypes.string,
  };

  handlePress = currency => {
    const { type } = this.props.navigation.state.params;

    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency));
    }

    this.props.navigation.goBack(null);
  };

  render = () => {
    const { type } = this.props.navigation.state.params;
    const { baseCurrency, quoteCurrency } = this.props;
    let currency = type === 'base' ? baseCurrency : quoteCurrency;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />

        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === currency}
              visible={item === currency}
              onPress={() => this.handlePress(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  };
}

const mapStateToProps = state => {
  const { baseCurrency, quoteCurrency } = state.currencies;

  return {
    baseCurrency,
    quoteCurrency,
  };
};

export default connect(mapStateToProps)(CurrencyList);
