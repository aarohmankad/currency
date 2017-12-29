import React, { Component } from 'react';
import propTypes from 'prop-types';
import { FlatList, View, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

class CurrencyList extends Component {
  static propTypes = {
    navigation: propTypes.object,
  };

  handlePress = () => {
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />

        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === 'CAD'}
              visible={item === 'CAD'}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;
