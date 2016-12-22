import React, { Component, PropTypes } from 'react'
import { Button, TextInput, Text, StyleSheet, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { Actions } from 'react-native-router-flux';

import { Responsable } from './../../../../components'
import * as actions from './../../store/actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    overflow: 'scroll'
  }
})

class AddResponsable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      level: '0',
      buttonDisabled: true
    }
  }

  updateInputFirstName (firstName) {
    this.setState({firstName: firstName})
    this.verifInput()
  }

  updateInputLastName (lastName) {
    this.setState({lastName: lastName})
    this.verifInput()
  }

  updateInputLevel (level) {
    this.setState({level: level})
    this.verifInput()
  }

  verifInput () {
    if( this.state.firstName != '' && this.state.lastName != '' && !isNaN(Number(this.state.level)) ) {
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
    this.props.addNewResponsable(this.state.firstName, this.state.lastName, Number(this.state.level))
    Actions.pop()
  }

  render() {
    return (
      <ScrollView style={{marginTop: 100, marginLeft: 20, marginRight: 20 }}>
        <Text>Prénom :</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(firstName) => this.updateInputFirstName(firstName)}
          value={this.state.firstName}
        />
        <Text style={{marginTop: 20}}>Nom :</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(lastName) => this.updateInputLastName(lastName)}
          value={this.state.lastName}
        />
        <Text style={{marginTop: 20}}>Niveau :</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(level) => this.updateInputLevel(level)}
          value={this.state.level}
        />
        <Button onPress={ this.add.bind(this) } disabled={this.state.buttonDisabled} title="Ajouter"/>
      </ScrollView>
    );
  }
}

AddResponsable.displayName = 'AddResponsable'

export default connect(
  null,
  (dispatch) => ({
    addNewResponsable: (firstName, lastName, level) => dispatch(actions.newResponsable(firstName, lastName, level))
  })
)(AddResponsable)
