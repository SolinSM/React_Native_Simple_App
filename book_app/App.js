import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//react-native-vector-icons'

import ListBooks from './screens/ListBooks';
import AddBook from './screens/AddBook';
import Hello from './screens/Hello';
import Profile from './screens/Profile';
import Video from './screens/Video';

let screen = Dimensions.get('window');


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (//Bookcase
    <Tab.Navigator
      initialRouteName="Bookcase"//"Feed"
      activeColor="#fff"
      labelStyle={{ fontSize: 10 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Hello"
        component={Hello}
        options={{
          tabBarLabel: 'Hello',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="hand-left" color={color} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="account" color={color} size={18} /> ),
           //tabBarIcon: ({tintColor}) => ( <Icon name="ios-person" type="ionicon" size={28} color={tintColor}/> ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={Video}
        options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="video" color={color} size={18} /> ),
           //tabBarIcon: ({tintColor}) => ( <Icon name="ios-person" type="ionicon" size={28} color={tintColor}/> ),
        }}
      />
      <Tab.Screen
        name="AddBook"
        component={AddBook}
        options={{
          tabBarLabel: 'AddBook',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle-outline" color={color} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="ListBooks"
        component={ListBooks}
        options={{
          tabBarLabel: 'ListBooks',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={18} />
          ),
        }}
      />
      
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
