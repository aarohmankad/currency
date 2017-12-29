import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});

class Themes extends Component {
  handleThemePress() {
    console.log('Press Theme');
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />

        <ListItem
          text="Blue"
          onPress={this.handleThemePress}
          iconBackground={styles.$blue}
          selected
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={this.handleThemePress}
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={this.handleThemePress}
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={this.handleThemePress}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Themes;
