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

class AddMember extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      classe: 'A',
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

  updateInputClasse (classe) {
    this.setState({classe: classe})
    this.verifInput()
  }

  verifInput () {
    if( this.state.firstName != '' && this.state.lastName != '' && this.state.classe != '' ) {
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
    this.props.addNewMember(this.state.firstName, this.state.lastName, this.state.classe)
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
        <Text style={{marginTop: 20}}>Classe :</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(classe) => this.updateInputClasse(classe)}
          value={this.state.classe}
        />
        <Button onPress={ this.add.bind(this) } disabled={this.state.buttonDisabled} title="Ajouter"/>
      </ScrollView>
    );
  }
}

AddMember.displayName = 'AddMember'

export default connect(
  null,
  (dispatch) => ({
    addNewMember: (firstName, lastName, classe) => dispatch(actions.newMember(firstName, lastName, classe))
  })
)(AddMember)
