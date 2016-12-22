import React, { PropTypes } from 'react'
import { Button, Text, StyleSheet, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { Actions } from 'react-native-router-flux';

import { Member } from './../../../../components'
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

const renderMembers = (members) => {
  members = _.sortBy(members, 'classe')
  return Object.keys(members).map((key) => {
    return (
      <Member
        key={key}
        id={members[key].id}
        firstName={members[key].firstName}
        lastName={members[key].lastName}
        classe={members[key].classe}>
      </Member>
    )
  })
}

const MembersManager = (props) => {

  const { members } = props

  return (
    <ScrollView style={{marginTop: 70, marginLeft: 20, marginRight: 20}}>
      <View style={{marginBottom: 50}}>{ renderMembers(members) }</View>
      <Button onPress={ Actions.AddMember } title="Ajouter un membre" />
    </ScrollView>
  )
}

MembersManager.displayName = 'MembersManager'

MembersManager.propTypes = {
  members: PropTypes.object.isRequired,
}

export default connect(
  (state) => ({
    members: state.app.members
  }),
  null
)(MembersManager)
