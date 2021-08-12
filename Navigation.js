import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Main from './Main';
import Another from './Another';

const {Navigator, Screen} = createMaterialTopTabNavigator()

export default function Navigation() {
  const [profile, setProfile] = useState({})
  useEffect(()=>{
    fetch("https://reqres.in/api/users?page=2").then(res=>res.json()).then(res=>{
      setProfile(res.data[0])
    })
  })
  return (
      <NavigationContainer>    
        <Navigator>
          <Screen name="Home" >
            {props=>(<Main {...props} profile={profile}/>)}
          </Screen>
          <Screen name="other" component={Another}/>
        </Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 100
  },
});
