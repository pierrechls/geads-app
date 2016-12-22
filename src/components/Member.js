import React, { PropTypes, Component } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'

class Member extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={{marginTop: 30}}>
        <Text>{ this.props.firstName } { this.props.lastName }, classe { this.props.classe }</Text>
      </View>
    )
  }
}

Member.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  classe: PropTypes.string.isRequired
}

export default Member
