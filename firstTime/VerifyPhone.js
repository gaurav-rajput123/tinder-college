import { LinearGradient } from 'expo-linear-gradient'
import React, { useRef, useState } from 'react'
import { ImageBackground, Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
const back = require('../assets/Images/background.jpg')


const VerifyPhone = ({navigation}) => {

    const [mobileNumber, setMobileNumber] = useState("")

    const [onFocusCSS, setOnFocusCSS] = useState(false)

    const [hasSubmited, setHasSubmited] = useState(false)

    const [hasVerified, setHasVerified] = useState(false)

    const [OTP, setOTP] = useState("")

    const handleBlur = () => {
        console.log("setting to false")
        setOnFocusCSS(false)
    }
    const handleFocus = () => {
        console.log("setting to true")
        setOnFocusCSS(true)
    }

    const handleSubmit = () => {
        if(!hasSubmited){
            setHasSubmited(true)
        }else{
            if(!hasVerified){
                // code to verify
                setHasVerified(true)
                // if success navigate to next screen
                navigation.navigate('Username')
            }
        }
        console.log("submitPressed")
    }
    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}><View style={{flex: 1, backgroundColor: "white"}}>
            {/* <ImageBackground  source={back} style={{flex: 1, justifyContent: 'center'}} ref={reference}> */}
                <View style={styles.itemContainer}>
                    <Text style={styles.heading}>My number is</Text>
                    {!hasSubmited? (
                        <TextInput keyboardType='numeric' maxLength={10} mode='flat' right={<TextInput.Icon name="phone"/>} underlineColor="pink" onFocus={handleFocus} onBlur={handleBlur} value={mobileNumber} onChangeText={(value)=>setMobileNumber(value)} style={[styles.input, onFocusCSS ? ({borderBottomColor: "pink", borderBottomWidth: 0}): null]} theme={{ colors: { primary: 'pink',underlineColor:'transparent',}}}/>
                    ): 
                    (
                        <TextInput keyboardType='numeric' placeholder="enter verification code" maxLength={6} mode='flat'underlineColor="pink" onFocus={handleFocus} onBlur={handleBlur} value={OTP} onChangeText={(value)=>setOTP(value)} style={[styles.input, onFocusCSS ? ({borderBottomColor: "pink", borderBottomWidth: 0}): null]} theme={{ colors: { primary: 'pink',underlineColor:'transparent',}}}/>
                    )}
                    <LinearGradient style={styles.gradient} start={{x: 0.5, y: 0.5}} end={{x: 1, y: 0.5}} colors={["#ec008c", "#fc6767"]}>
                        <TouchableOpacity><Button mode="contained" labelStyle={{fontSize: 18, letterSpacing: 4}} style={{backgroundColor: "transparent", borderRadius: 24}} onPress={handleSubmit}>{!hasSubmited ? "Submit" : "Verify"}</Button></TouchableOpacity>
                    </LinearGradient>
                </View>
            {/* </ImageBackground> */}
        </View>
        </TouchableWithoutFeedback>
    )
}

const PhoneIcon = () => {
    return (
        <TextInput.Icon name="phone"/>
    )
}

export default VerifyPhone

const styles = StyleSheet.create({
    itemContainer: {
        flex:1,
        // paddingHorizontal: 60,
        // justifyContent: "center"
    },
    input: {
        backgroundColor: "white",
        marginHorizontal: 24,
        marginTop: 45,
        fontSize: 24,
        marginRight: 130,
        letterSpacing: 2
    },
    heading: {
        marginTop: 24,
        paddingHorizontal: 24,
        fontSize: 30,
        fontWeight: "bold"
    },
    gradient: {
        borderRadius: 24,
        marginTop: 48,
        marginHorizontal: 36
    }
})
