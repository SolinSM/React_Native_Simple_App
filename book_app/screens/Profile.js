import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={[styles.container, styles.container1]}>
        <View style={styles.container}>
            <Image style={styles.profile_pic} source={require("../assets/Staff.png")}/>
          
        </View>
        <View style={[styles.container, styles.container2]}>
            <Text style={styles.text2}>Team 4</Text>
        </View>
        <View style={[styles.container, styles.container3]}>
          
          <Text style={styles.text}>Name : Admin 1</Text>
          <Text style={styles.text}>Email : admin1@gmail.com</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container1: {
    flex: 4
  },
  container2: {
    flex: 0.5,
  },
  container3: {
    flex: 0.5
  },
  profile_pic:{
    width: "50%",
    height: "50%",
    position: "absolute",
    top: 50,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  text2: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: "bold",
    color: "tomato"
  }
});