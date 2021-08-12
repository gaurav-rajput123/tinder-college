import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import Another from './Another';
import Header from './Header';
// import SwipeScree from './SwipeScree';
import Home from './Home';
import LogOrSign from './firstTime/LogOrSign';
import VerifyPhone from './firstTime/VerifyPhone';
import ProfileFullName from './firstTime/ProfileFullName';
import Year from './firstTime/Year';
import College from './firstTime/College';
import Branch from './firstTime/Branch';
import { IconButton } from 'react-native-paper';
// import { black } from 'react-native-paper/lib/typescript/styles/colors';

// import { Header } from 'react-native/Libraries/NewAppScreen';

const {Navigator, Screen} = createStackNavigator()

export default function App() {
  const [profile, setProfile] = useState([])

  const [authenticatedUser, setAuthenticatedUser] = useState(null)

  useEffect(()=>{
    fetch("https://reqres.in/api/users?page=2").then(res=>res.json()).then(res=>{
      console.log(res.data[0])
      setProfile(res.data)
    }).catch(e=>console.log(e)) 
  }, [])
  return (

    // <LogOrSign/>
    // <VerifyPhone/>
    // <ProfileFullName/>
    // <Year/>
    // <College/>

    // Uncomment these after making the login screen

      authenticatedUser != null ? (
        <NavigationContainer>    
          <Navigator screenOptions={{header:()=>(<Header/>), headerMode: "screen"}}>
            <Screen name="Home">
              {()=> profile.length > 1 ? <Home data={profile}/>: null}
            </Screen>
            <Screen name="other" component={Another}/>
          </Navigator>
        </NavigationContainer> 
      ): 
      (
        <NavigationContainer>
          <Navigator screenOptions={{headerMode: 'screen', header: ({navigation})=>{
            return (
              <View style={styles.headerView}>
                <IconButton icon='arrow-left' size={30} onPress={()=> navigation.goBack()}/>
              </View>
            )
          }, headerStyle: {height: 80}}}>
            <Screen name="logScreen" component={LogOrSign} options={{headerShown: false}}/>
            <Screen name="verification" component={VerifyPhone}/>
            <Screen name="Username" component={ProfileFullName}/>
            <Screen name="useryear" component={Year}/>
            <Screen name="userbranch" component={Branch}/>
            <Screen name="usercollege" component={College}/> 
          </Navigator>
        </NavigationContainer>
      )
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
  headerView: {
    backgroundColor: "white",
    paddingTop: 30,
  }
});
