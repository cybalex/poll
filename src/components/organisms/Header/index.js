/**
 *
 * Header
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Text, View } from 'react-native'

import styles from './styles'

export default class Header extends React.Component {
  static propTypes = {
    message: PropTypes.string,
  }

  constructor(props) {
    super(props)

    this.state = { isLoggedIn: false }
  }

  toggleUser = () => {
    this.setState(previousState => {
      return { isLoggedIn: !previousState.isLoggedIn }
    })
  }

  render() {
    let display = this.state.isLoggedIn ? 'Sample User' : this.props.message

    return (
      <View style={styles.headerStyle}>
        <Text style={styles.headText} onPress={this.toggleUser}>
          {display}
        </Text>
      </View>
    )
  }
}
