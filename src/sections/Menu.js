/**
 *
 * Menu
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'

export class Menu extends React.Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#35605a',
  },

  buttonStyle: {
    flex: 1,
    backgroundColor: '#35605a',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderBottomWidth: 1,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
  },
})
