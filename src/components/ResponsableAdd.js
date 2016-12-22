import React, { PropTypes, Component } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import * as actions from './../modules/app/store/actions'

class ResponsableAdd extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    if(this.props.active) {
      return (
        <View style={{marginTop: 30}}>
          <Text>{ this.props.firstName } { this.props.lastName }, niveau { this.props.level }</Text>
          <Text onPress={ () => this.props.deleteResponsableFromARamification(this.props.idRamification, this.props.id) } style={{fontSize: 15, color: 'red'}}>RETIRER</Text>
        </View>
      )
    }
    return (
      <View style={{marginTop: 30}}>
        <Text>{ this.props.firstName } { this.props.lastName }, niveau { this.props.level }</Text>
        <Text onPress={ () => this.props.addResponsableRamification(this.props.idRamification, this.props.id) } style={{fontSize: 15, color: 'green'}}>CHOISIR</Text>
      </View>
    )
  }

}

ResponsableAdd.propTypes = {
  idRamification: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired
}

export default connect(
  null,
  (dispatch) => ({
    addResponsableRamification: (idRamification, idResponsable) => dispatch(actions.addResponsableIntoARamification(idRamification, idResponsable)),
    deleteResponsableFromARamification: (idRamification, idResponsable) => dispatch(actions.deleteResponsableFromARamification(idRamification, idResponsable))
  })
)(ResponsableAdd)
