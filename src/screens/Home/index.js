/**
 *
 * Home
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Text, View, ImageBackground } from 'react-native'

import Header from '@/components/organisms/Header'
import Menu from '@/components/organisms/Menu'

import styles from './styles'

export default class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  static navigationOptions = {
    header: null,
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImageStyle}
          source={require('assets/images/dog.jpg')}
        >
          <Header message="Press to login" />
          <Text style={{ flex: 10, color: '#ffffff' }}>
            Hello from Home component!
          </Text>
          <Menu navigate={navigate} />
          <Text style={{ color: '#ffffff' }}>Third line</Text>
        </ImageBackground>
      </View>
    )
  }
}
