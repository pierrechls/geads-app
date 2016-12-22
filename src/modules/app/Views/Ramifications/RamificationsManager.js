import React, { PropTypes } from 'react'
import { Button, Text, StyleSheet, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { Actions } from 'react-native-router-flux';

import { Ramification } from './../../../../components'
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

const renderRamifications = (ramifications) => {
  ramifications = _.sortBy(ramifications, 'capacity')
  return Object.keys(ramifications).map((key) => {
    return (
      <Ramification
        key={key}
        id={ramifications[key].id}
        zone={ramifications[key].zone}
        region={ramifications[key].region}
        capacity={ramifications[key].capacity}
        responsable={ramifications[key].responsable}
        membersList={ramifications[key].members}>
      </Ramification>
    )
  })
}

const RamificationsManager = (props) => {

  const { ramifications } = props

  return (
    <ScrollView style={{marginTop: 70, marginLeft: 20, marginRight: 20}}>
      <View style={{marginBottom: 50}}>{ renderRamifications(ramifications) }</View>
      <Button onPress={ Actions.AddRamification } title="Ajouter une ramification" />
    </ScrollView>
  )
}

RamificationsManager.displayName = 'RamificationsManager'

RamificationsManager.propTypes = {
  ramifications: PropTypes.object.isRequired,
}

export default connect(
  (state) => ({
    ramifications: state.app.ramifications
  }),
  null
)(RamificationsManager)
