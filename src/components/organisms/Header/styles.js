import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
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
