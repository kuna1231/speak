import * as React from 'react';
import * as Speech from 'expo-speech';
import { Text, View, StyleSheet, TextInput, Image,TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      text: '',
      
    };
  }
  

  



  render(){
  return (
    <View >
    <Header
          backgroundColor={'#00bfff'}
          centerComponent={{
            text: 'SPEECH TO TEXT',
            style: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
          }}
        />
        <Image
          style={styles.imageIcon}
          source={require('./assets/textToSpeech.png')}
        />
        <Text style={styles.title}>Enter the word</Text>
      <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity style={styles.button}
        onPress={()=>{
          var thingToSay = this.state.text;
          (this.state.text === "") ? (
            Alert.alert("The input box is empty!")
          ):
          (Speech.speak(thingToSay))
        }}
          
        >
        <Text style={styles.buttonText}>Click Here to hear Speech</Text>
        </TouchableOpacity>
    </View>
  );}
}

const styles = StyleSheet.create({
  
  inputBox: {
    marginTop: 25,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 15
  },
  title:{
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 17
  },
  button:{
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 10,
    backgroundColor: '#00bfff',
    padding: 5,
    width: 200,
    height:40,
    borderWidth: 3
  },
  buttonText:{
    alignSelf: "center",
    fontWeight: 'bold',
    color: 'black'

  }
  
});
