/**
 *
 * Menu
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Text, View, Alert, TouchableOpacity } from 'react-native'

import styles from './styles'

export default class Menu extends React.Component {
  static propTypes = {
    navigate: PropTypes.func,
  }

  onPress = () => {
    Alert.alert('menu alert', 'clicked!')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigate('CreatePollRT')}
          >
            START
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigate('CreatePollRT')}
          >
            CREATE
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigate('CreatePollRT')}
          >
            LIST POLLS
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
