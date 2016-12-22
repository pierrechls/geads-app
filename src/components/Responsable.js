import React, { PropTypes, Component } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'

class Responsable extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={{marginTop: 30}}>
        <Text>{ this.props.firstName } { this.props.lastName }, niveau { this.props.level }</Text>
      </View>
    )
  }

}

Responsable.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired
}

export default Responsable
