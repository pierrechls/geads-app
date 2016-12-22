import React, { PropTypes, Component } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import * as actions from './../modules/app/store/actions'

class MemberAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    if(this.props.active) {
      return (
        <View style={{marginTop: 30}}>
          <Text>{ this.props.firstName } { this.props.lastName }, classe { this.props.classe }</Text>
          <Text onPress={ () => this.props.deleteMemberFromARamification(this.props.idRamification, this.props.id) } style={{fontSize: 15, color: 'red'}}>SUPPRIMER</Text>
        </View>
      )
    }
    return (
      <View style={{marginTop: 30}}>
        <Text>{ this.props.firstName } { this.props.lastName }, classe { this.props.classe }</Text>
        <Text onPress={ () => this.props.addMemberRamification(this.props.idRamification, this.props.id) } style={{fontSize: 15, color: 'green'}}>AJOUTER</Text>
      </View>
    )
  }
}

MemberAdd.propTypes = {
  idRamification: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  classe: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}

export default connect(
  null,
  (dispatch) => ({
    addMemberRamification: (idRamification, idMember) => dispatch(actions.addMemberIntoARamification(idRamification, idMember)),
    deleteMemberFromARamification: (idRamification, idMember) => dispatch(actions.deleteMemberFromARamification(idRamification, idMember))
  })
)(MemberAdd)
