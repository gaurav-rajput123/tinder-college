import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
const back = require('../assets/Images/background.jpg')
import Constants from 'expo-constants'
import { Button, IconButton } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'

const LogOrSign = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <StatusBar style='auto'/>
            <ImageBackground source={back} style={styles.background}>
                <TouchableWithoutFeedback>
                    <View style={styles.ImageBackground}><IconButton icon="leaf" size={220} color="white" style={styles.Image}/></View>
                </TouchableWithoutFeedback>
                <View style={{flex: 1}}/>
                <View style={styles.buttonBox}>
                    <View style={styles.buttonViews}>
                        <LinearGradient start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={["#00F260", "#0575E6"]} style={{borderRadius: 24}}>
                            <Button onPress={()=>console.log("mothing")} style={[styles.buttonSignUp, styles.buttonStyles]} mode='contained'><Text style={[{color: "black", fontSize: 20, }, styles.text]}>Sign Up</Text></Button>    
                        </LinearGradient>
                    </View>
                    <View style={styles.buttonViews}>
                        {/* <LinearGradient start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={["#00F260", "#0575E6"]} style={{borderRadius: 24}}> */}
                            <Button onPress={()=>navigation.navigate("verification")} style={[styles.buttonLogIn, styles.buttonStyles]} mode='contained'><Text style={[{color: "black", fontSize:20, backgroundColor: "transparent" }, styles.text]}>Log In</Text></Button>
                        {/* </LinearGradient> */}
                        {/* <Button onPress={()=>console.log("helloi")}><Text>Hello</Text></Button> */}
                    </View>
                </View> 
            </ImageBackground>
        </View>
    )
}

export default LogOrSign

const styles = StyleSheet.create({
    text: {
        borderColor: "black",
        borderWidth: 1,
        borderStyle: "solid"
    },
    background: {
        flex: 1,
    },
    buttonBox: {
        // backgroundColor: "white",
        marginBottom: 36,
        height: 250,
        marginHorizontal: 36
    },
    buttonViews: {
        paddingHorizontal: 48,
        paddingVertical: 8
    },
    buttonStyles: {
        borderRadius: 24,
        backgroundColor: 'white',
        elevation: 10
    },
    ImageBackground: {
        // backgroundColor: "red",
        // justifyContent: "center"
        alignItems: "center",
        position: "relative",
        top: 170
    },
    Image: {
        // backgroundColor: "pink"
    }
})
