'use strict';

import {StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  titleContainer: {
    backgroundColor: '#00BFA5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 100
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 27
  },
  button: {
    backgroundColor: '#26a69a',
    padding: 15,
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  buttonDisabled: {
    backgroundColor: '#2bbbad',
    padding: 15,
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbar: {
    height: 60,
    backgroundColor: '#D6D2D2'
  },
  orText: {
    alignSelf: 'center',
    marginTop: 20
  },
  message: {
    color: 'red',
    marginLeft: 5
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'transparent'
  },
  inputText: {
    backgroundColor: '#FFFFFF',
    height: 60
  },

  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
  }
});
