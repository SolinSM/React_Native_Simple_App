import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';

//const image = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuYeGEDKU5f5Z97cLoZUemtzHeF5Dlltz8A&usqp=CAU' };

const image = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuYeGEDKU5f5Z97cLoZUemtzHeF5Dlltz8A&usqp=CAU' };


export default class Hello extends Component {
  render() {
    return (
        <View style={styles.container}>        
          <ImageBackground source={image} style={styles.image}>
            <Text style={styles.title}>
              Welcome to our App
            </Text>
            <Text style={styles.title}>
              React Native
            </Text>
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
    //backgroundImage: require("../assets/Staff.png")
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: "tomato"
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: "100%"
  },
});
