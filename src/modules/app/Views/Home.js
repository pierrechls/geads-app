import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <Button onPress={ Actions.RamificationsManager } title="Gérer les ramifications" />
        <Button onPress={ Actions.ResponsablesManager } title="Gérer les reponsables" />
        <Button onPress={ Actions.MembersManager } title="Gérer les membres" />
      </View>
    )
  }
}
