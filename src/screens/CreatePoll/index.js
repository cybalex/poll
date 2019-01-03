/**
 *
 * CreatePoll
 *
 */

import React from 'react'
import {
  ScrollView,
  Animated,
  Dimensions,
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  UIManager,
} from 'react-native'

import Header from '@/components/organisms/Header'
import Question from '@/models/Question'

import i18n from 'i18n-js'

import styles from './styles'

const { State: TextInputState } = TextInput

export default class CreatePoll extends React.Component {
  constructor(props) {
    super(props)
    this.question = Question
    this.state = {
      question: '',
      answer: '',
      shift: new Animated.Value(0),
    }
  }

  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener(
      'keyboardDidShow',
      this.handleKeyboardDidShow
    )
    this.keyboardDidHideSub = Keyboard.addListener(
      'keyboardDidHide',
      this.handleKeyboardDidHide
    )
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove()
    this.keyboardDidHideSub.remove()
  }

  clearFields = () => this.setState({ question: '', answer: '' })

  saveQuestion = () => {
    // Alert.alert(
    //     'question should be stored in db',
    //     this.state.question + ' - ' + this.state.answer
    // );
  }

  render() {
    const { shift } = this.state

    return (
      <Animated.View
        style={[styles.container, { transform: [{ translateY: shift }] }]}
      >
        <ScrollView
          scrollEnabled={false}
          contentContainerStyle={{
            flexGrow: 1,
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          <Header message={i18n.t('Login')} />
        </ScrollView>

        <ScrollView
          scrollEnabled={false}
          contentContainerStyle={{
            flexGrow: 1,
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.caption}>Create new question</Text>
        </ScrollView>

        <ScrollView
          scrollEnabled={false}
          contentContainerStyle={{
            flexGrow: 1,
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flex: 2 }}>
            <TextInput
              style={[styles.input, { marginBottom: 0, marginTop: 0 }]}
              onChangeText={text => this.setState({ question: text })}
              value={this.state.question}
              autoCapitalize="none"
              placeholder={i18n.t('Type a question')}
              placeholderTextColor="#888888"
              underlineColorAndroid="transparent"
              multiline
              blurOnSubmit={false}
            />
          </View>
        </ScrollView>

        {/*<Text style={styles.label}>Answer</Text>*/}
        <ScrollView
          scrollEnabled={false}
          contentContainerStyle={{
            flexGrow: 1,
            flex: 1,
            justifyContent: 'space-between',
            marginTop: 20,
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ answer: text })}
            value={this.state.answer}
            autoCapitalize="none"
            placeholder="My name is Oleksii"
            placeholderTextColor="#888888"
            multiline
            blurOnSubmit={false}
          />
        </ScrollView>

        <ScrollView
          scrollEnabled={false}
          contentContainerStyle={{
            flexGrow: 1,
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.saveQuestion()}
          >
            <Text style={styles.buttonText}> Submit </Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
    )
  }

  handleKeyboardDidShow = event => {
    const { height: windowHeight } = Dimensions.get('window')
    const keyboardHeight = event.endCoordinates.height
    const currentlyFocusedField = TextInputState.currentlyFocusedField()
    UIManager.measure(
      currentlyFocusedField,
      (originX, originY, width, height, pageX, pageY) => {
        const fieldHeight = height
        const fieldTop = pageY
        const gap = windowHeight - keyboardHeight - (fieldTop + fieldHeight)
        if (gap >= 0) {
          return
        }
        Animated.timing(this.state.shift, {
          toValue: gap,
          duration: 500,
          useNativeDriver: true,
        }).start()
      }
    )
  }

  handleKeyboardDidHide = () => {
    Animated.timing(this.state.shift, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }
}
