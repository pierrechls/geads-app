import React, { Component, PropTypes } from 'react'
import { Button, TextInput, Text, StyleSheet, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { Actions } from 'react-native-router-flux';

import { Ramification } from './../../../../components'
import * as actions from './../../store/actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    overflow: 'scroll'
  }
})

class AddRamification extends Component {

  constructor(props) {
    super(props)
    this.state = {
      zone: '',
      region: '',
      capacity: '0',
      buttonDisabled: true
    }
  }

  updateInputZone (zone) {
    this.setState({zone: zone})
    this.verifInput()
  }

  updateInputRegion (region) {
    this.setState({region: region})
    this.verifInput()
  }

  updateInputCapacity (capacity) {
    this.setState({capacity: capacity})
    this.verifInput()
  }

  verifInput () {
    if( this.state.zone != '' && this.state.region != '' && !isNaN(Number(this.state.capacity)) ) {
      this.setState({
        buttonDisabled: false
      })
    } else {
      this.setState({
        buttonDisabled: true
      })
    }
  }

  add () {
    this.props.addNewRamification(this.state.zone, this.state.region, Number(this.state.capacity))
    Actions.pop()
  }

  render() {
    return (
      <ScrollView style={{marginTop: 100, marginLeft: 20, marginRight: 20 }}>
        <Text>Zone :</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(zone) => this.updateInputZone(zone)}
          value={this.state.zone}
        />
        <Text style={{marginTop: 20}}>Region :</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(region) => this.updateInputRegion(region)}
          value={this.state.region}
        />
        <Text style={{marginTop: 20}}>Capacité :</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(capacity) => this.updateInputCapacity(capacity)}
          value={this.state.capacity}
        />
        <Button onPress={ this.add.bind(this) } disabled={this.state.buttonDisabled} title="Ajouter"/>
      </ScrollView>
    );
  }
}

AddRamification.displayName = 'AddRamification'

export default connect(
  null,
  (dispatch) => ({
    addNewRamification: (zone, region, capacity) => dispatch(actions.newRamification(zone, region, capacity))
  })
)(AddRamification)
