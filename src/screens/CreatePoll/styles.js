import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  caption: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    textAlignVertical: 'bottom',
  },

  // label: {
  //   marginLeft: 15,
  //   marginBottom: 6,
  //   fontSize: 16,
  //   flex: 1,
  //   textAlignVertical: 'bottom',
  //   color: '#35605a',
  // },

  input: {
    height: '100%',
    width: '90%',
    padding: 10,
    marginTop: 0,
    margin: 15,
    borderRadius: 10,
    color: '#35605a',
    borderWidth: 1,
    borderColor: '#35605a',
  },

  button: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },

  buttonText: {
    color: 'white',
  },
})
