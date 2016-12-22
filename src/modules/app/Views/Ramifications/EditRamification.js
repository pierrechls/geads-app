import React, { Component, PropTypes } from 'react'
import { Button, TextInput, Text, StyleSheet, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { Actions } from 'react-native-router-flux';

import { ResponsableAdd, MemberAdd } from './../../../../components'
import * as actions from './../../store/actions'

import _ from 'lodash'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    overflow: 'scroll'
  }
})

const renderAllResponsables = (responsables, idRamification, ramifications) => {
  responsables = _.sortBy(responsables, 'level')
  return Object.keys(responsables).map((key) => {
    return (
      <View key={key}>
        <ResponsableAdd
          id={responsables[key].id}
          firstName={responsables[key].firstName}
          lastName={responsables[key].lastName}
          level={responsables[key].level}
          idRamification={idRamification}
          active={ ramifications[idRamification].responsable ===  responsables[key].id ? true : false}>
        </ResponsableAdd>
      </View>
    )
  })
}

const renderAllMembers = (members, idRamification, ramifications) => {
  members = _.sortBy(members, 'level')
  return Object.keys(members).map((key) => {
    return (
      <View key={key}>
        <MemberAdd
          id={members[key].id}
          firstName={members[key].firstName}
          lastName={members[key].lastName}
          classe={members[key].classe}
          idRamification={idRamification}
          active={ ramifications[idRamification].members.includes(members[key].id) ? true : false }>
        </MemberAdd>
      </View>
    )
  })
}

class EditRamification extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ScrollView style={{marginTop: 70, marginLeft: 20, marginRight: 20 }}>
        <Text>Modification de la ramification n°{ this.props.id}</Text>
        <Text style={{ fontSize: 20, marginTop: 50}}>Choisir un responsable :</Text>
        { renderAllResponsables(this.props.responsables, this.props.id, this.props.ramifications) }
        <Text style={{ fontSize: 20, marginTop: 50}}>Ajouter un membre :</Text>
        { renderAllMembers(this.props.members, this.props.id, this.props.ramifications) }
      </ScrollView>
    );
  }
}

EditRamification.displayName = 'EditRamification'

EditRamification.propTypes = {
  responsables: PropTypes.object.isRequired
}

export default connect(
  (state) => ({
    responsables: state.app.responsables,
    members: state.app.members,
    ramifications: state.app.ramifications
  }),
  (dispatch) => ({
    addNewRamification: (zone, region, capacity) => dispatch(actions.newRamification(zone, region, capacity)),
    addResponsableRamification: (idRamification, idResponsable) => dispatch(actions.addResponsableIntoARamification(idRamification, idResponsable))
  })
)(EditRamification)
