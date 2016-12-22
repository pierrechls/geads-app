import React, { PropTypes } from 'react'
import { Button, Text, StyleSheet, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { Actions } from 'react-native-router-flux';

import { Responsable } from './../../../../components'
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

const renderResponsables = (responsables) => {
  responsables = _.sortBy(responsables, 'level')
  return Object.keys(responsables).map((key) => {
    return (
      <Responsable
        key={key}
        id={responsables[key].id}
        firstName={responsables[key].firstName}
        lastName={responsables[key].lastName}
        level={responsables[key].level}>
      </Responsable>
    )
  })
}

const ResponsablesManager = (props) => {

  const { responsables } = props

  return (
    <ScrollView style={{marginTop: 70, marginLeft: 20, marginRight: 20}}>
      <View style={{marginBottom: 50}}>{ renderResponsables(responsables) }</View>
      <Button onPress={ Actions.AddResponsable } title="Ajouter un responsable" />
    </ScrollView>
  )
}

ResponsablesManager.displayName = 'ResponsablesManager'

ResponsablesManager.propTypes = {
  responsables: PropTypes.object.isRequired,
}

export default connect(
  (state) => ({
    responsables: state.app.responsables
  }),
  null
)(ResponsablesManager)
