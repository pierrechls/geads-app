import React, { PropTypes, Component } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'
import { Responsable } from './'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

import * as actions from './../modules/app/store/actions'

const renderMembersArray = (membersList, members) => {
  return Object.keys(membersList).map((key) => {
    return (
      <Text key={key}>{ members[ membersList[key] ].firstName } { members[ membersList[key] ].lastName }, </Text>
    )
  })
}

class Ramification extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    ActualResponsable = this.props.responsables[this.props.responsable] == null ? '' : this.props.responsables[this.props.responsable].firstName + ' ' + this.props.responsables[this.props.responsable].lastName
    //ActualMember = this.props.members[this.props.membersList] == null ? '' : this.props.members[this.props.membersList].firstName + ' ' + this.props.members[this.props.membersList].lastName
    return (
      <View style={{marginTop: 30}}>
        <Text>Zone : { this.props.zone }</Text>
        <Text>Region : { this.props.region }</Text>
        <Text>Capacity : { this.props.capacity }</Text>
        <Text>Responsable :  { ActualResponsable }</Text>
        <Text>Membres : { renderMembersArray(this.props.membersList, this.props.members) }</Text>
        <Text onPress={ () => Actions.EditRamification({ id: this.props.id }) } style={{fontSize: 15, color: 'green'}}>MODIFIER</Text>
      </View>
    )
  }
}

Ramification.propTypes = {
  id: PropTypes.number.isRequired,
  zone: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  responsable: PropTypes.number,
  membersList: PropTypes.array
}

export default connect(
  (state) => ({
    responsables: state.app.responsables,
    members: state.app.members
  }),
  null
)(Ramification)
