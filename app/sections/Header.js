/**
 *
 * Header
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { StyleSheet, Text, View, Platform } from 'react-native'

export class Header extends React.Component {
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

const styles = StyleSheet.create({
  headText: {
    color: '#ffffff',
    textAlign: 'right',
    fontSize: 20,
  },

  headerStyle: {
    flex: 1,
    paddingTop: 30,
    paddingRight: 10,
    backgroundColor: Platform.OS === 'android' ? '#35605a' : '#999999',
  },
})
